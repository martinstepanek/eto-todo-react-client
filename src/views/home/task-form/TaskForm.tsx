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

interface TaskFormValues {
  name: string;
  detail: string;
  specificDateType: DateType;
  specificDateValue: Date;
  specificTimeValue: number;
  isRecurrent: boolean;
  recurrentDateValue: number;
}

const TaskForm = forwardRef((props, ref) => {
  const initialValues: TaskFormValues = {
    name: '',
    detail: '',
    specificDateType: DateType.Date,
    specificDateValue: new Date(),
    specificTimeValue: 0,
    isRecurrent: false,
    recurrentDateValue: 0,
  };

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
  const [nameFieldValue, setNameFieldValue] = useState(initialValues.name);

  const onSubmit = async (values: TaskFormValues) => {};

  const onNameFieldChange = e => {
    const value = e.target.value;
    setNameFieldValue(value);
    if (value.length > 0) {
      setIsSaveButtonDisabled(false);
    } else {
      setIsSaveButtonDisabled(true);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form {...props}>
        <Field name="name">
          {({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder="New task"
              onChange={onNameFieldChange}
              value={nameFieldValue}
              ref={nameFieldRef}
              autoComplete="off"
            />
          )}
        </Field>
        {isDetailVisible && <Field name="detail" type="text" as="textarea" />}
        <TaskFormOptionsMenu
          onDetailClick={() => setIsDetailVisible(true)}
          onCalendarClick={() => {}}
          saveButtonProps={{
            disabled: isSaveButtonDisabled,
          }}
        />
      </Form>
    </Formik>
  );
});

export default styled(TaskForm)`
  background-color: ${colors.textBackground} !important;
  padding: 15px 0;
`;
