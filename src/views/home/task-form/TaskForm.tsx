import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import { DateType } from './DateType';
import { Input } from '../../../components/base/form/Input';
import colors from '../../../styles/colors';
import TaskFormOptionsMenu from './TaskFormOptionsMenu';

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

    useImperativeHandle(ref, () => ({
      open: () => {
        if (nameFieldRef && nameFieldRef.current) {
          // hack to deffer focus because of animation
          setTimeout(() => nameFieldRef?.current?.focus(), 100);
        }
      },
      close: () => {},
    }));

    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

    const onFormSubmit = (values: TaskFormValues, { resetForm }) => {
      onSubmit(values);
      resetForm(initialValues);
    };

    const onNameFieldChange = value => {
      if (value.length > 0) {
        setIsSaveButtonDisabled(false);
      } else {
        setIsSaveButtonDisabled(true);
      }
    };

    return (
      <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        {formikProps => {
          onNameFieldChange(formikProps.values.name);
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
              {isDetailVisible && (
                <Field name="detail" type="text" as="textarea" />
              )}
              <TaskFormOptionsMenu
                onDetailClick={() => setIsDetailVisible(true)}
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
