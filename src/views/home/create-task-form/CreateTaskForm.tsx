import React, { forwardRef } from 'react';
import TaskForm, { FormHandle, TaskFormValues } from '../task-form/TaskForm';
import { DateType } from '../types/DateType';
import CREATE_TASK from './createTask';
import { useMutation } from '@apollo/client';
import { TaskListType } from '../types/TaskListType';
import GET_TASKS from '../task-list/getTasks';
import { TaskOperation } from '../types/TaskOperation';

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

    const [createTask] = useMutation(CREATE_TASK, {
      update(cache, { data: { createTask } }) {
        const query = GET_TASKS;
        const taskOperation = createTask as TaskOperation;

        taskOperation.inLists.map((listType: TaskListType) => {
          const data: any = cache.readQuery({
            query,
            variables: { listType },
          });

          cache.writeQuery({
            query,
            variables: { listType },
            data: {
              tasks: [...data.tasks, taskOperation.task],
            },
          });
        });
      },
    });

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
