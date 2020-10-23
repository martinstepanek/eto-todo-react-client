import React, { forwardRef } from 'react';
import TaskForm, { FormHandle, TaskFormValues } from '../task-form/TaskForm';
import { DateType } from '../task-form/DateType';
import CREATE_TASK from '../task-form/createTask';
import { useMutation } from '@apollo/client';

const CreateTaskForm = forwardRef<FormHandle>((props, ref) => {
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

  const onSubmit = async (values: TaskFormValues) => {
    await createTask({ variables: { task: values } });
  };
  console.log(data);

  return (
    <TaskForm ref={ref} initialValues={initialValues} onSubmit={onSubmit} />
  );
});

export default CreateTaskForm;