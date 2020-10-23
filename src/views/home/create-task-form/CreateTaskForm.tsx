import React, { forwardRef } from 'react';
import TaskForm, { FormHandle, TaskFormValues } from '../task-form/TaskForm';
import { DateType } from '../task-form/DateType';
import CREATE_TASK from './createTask';
import { useMutation } from '@apollo/client';

interface CreateTaskFormProps {
  onSubmit: () => void;
}

const CreateTaskForm = forwardRef<FormHandle, CreateTaskFormProps>(
  ({ onSubmit }, ref) => {
    const initialValues: TaskFormValues = {
      name: '',
      detail: '',
      specificDateType: DateType.Date,
      specificDateValue: new Date(),
      specificTimeValue: 0,
      isRecurrent: false,
      recurrentDateValue: 0,
    };

    const [createTask, { data }] = useMutation(CREATE_TASK);

    const onTaskFormSubmit = async (values: TaskFormValues) => {
      onSubmit();
      await createTask({ variables: { task: values } });
    };

    return (
      <TaskForm
        ref={ref}
        initialValues={initialValues}
        onSubmit={onTaskFormSubmit}
      />
    );
  }
);

export default CreateTaskForm;
