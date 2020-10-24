import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import { DateType } from '../../types/DateType';
import { Input } from '../../../../components/base/form/Input';
import colors from '../../../../styles/colors';
import TaskFormOptionsMenu from './TaskFormOptionsMenu';
import { DetailTextArea } from './DetailTextArea';

export interface TaskFormValues {
  name: string;
  detail: string;
  specificDateType: DateType;
  specificDateValue: Date;
  specificTimeValue: number;
  isRecurrent: boolean;
  recurrentDateValue: number;
}

export interface FormHandle {
  open: () => void;
  close: () => void;
}

interface TaskFormProps {
  onSubmit: (values: TaskFormValues) => void;
  initialValues: TaskFormValues;
}

const TaskForm = forwardRef<FormHandle, TaskFormProps>(
  ({ onSubmit, initialValues, ...props }, ref) => {
    const nameFieldRef = useRef<HTMLInputElement>(null);
    const detailFieldRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        if (nameFieldRef && nameFieldRef.current) {
          // hack to deffer focus because of animation
          setTimeout(() => nameFieldRef?.current?.focus(), 100);
        }
      },
      close: () => {
        if (detailFieldRef && detailFieldRef.current) {
          if (detailFieldRef.current.value.length === 0) {
            setIsDetailVisible(false);
          }
        }
      },
    }));

    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

    const onFormSubmit = (values: TaskFormValues, { resetForm }) => {
      onSubmit(values);
      resetForm(initialValues);
      setIsDetailVisible(false);
    };

    const onNameFieldChange = value => {
      if (value.length > 0) {
        setIsSaveButtonDisabled(false);
      } else {
        setIsSaveButtonDisabled(true);
      }
    };

    const showDetailInput = () => {
      setIsDetailVisible(true);
      if (detailFieldRef && detailFieldRef.current) {
        detailFieldRef.current.focus();
      }
    };

    return (
      <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        {formikProps => {
          useEffect(() => onNameFieldChange(formikProps.values.name), [
            formikProps.values.name,
          ]);
          return (
            <Form {...props}>
              <Field name="name">
                {({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="New task"
                    ref={nameFieldRef}
                    autoComplete="off"
                  />
                )}
              </Field>
              <Field name="detail">
                {({ field }) => (
                  <DetailTextArea
                    {...field}
                    placeholder="Add details"
                    visible={isDetailVisible}
                    ref={detailFieldRef}
                  />
                )}
              </Field>
              <TaskFormOptionsMenu
                onDetailClick={showDetailInput}
                onCalendarClick={() => {}}
                saveButtonProps={{
                  disabled: isSaveButtonDisabled,
                }}
              />
            </Form>
          );
        }}
      </Formik>
    );
  }
);

export default styled(TaskForm)`
  background-color: ${colors.textBackground} !important;
  padding: 15px 0;
`;
