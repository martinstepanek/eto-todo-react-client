import { ApolloCache } from '@apollo/client';
import { TaskOperation } from '../types/TaskOperation';
import { TaskOperationType } from '../types/TaskOperationType';
import GET_TASKS from './getTasks';
import { TaskListType } from '../types/TaskListType';

const addTask = (cache: ApolloCache<unknown>, taskOperation: TaskOperation) => {
  const query = GET_TASKS;

  taskOperation.inLists.map((listType: TaskListType) => {
    const variables = { listType };

    const data: any = cache.readQuery({
      query,
      variables,
    });

    cache.writeQuery({
      query,
      variables,
      data: {
        tasks: [...data.tasks, taskOperation.task],
      },
    });
    return true;
  });
};

export const taskLocalOperation = (
  cache: ApolloCache<unknown>,
  taskOperation: TaskOperation
) => {
  switch (taskOperation.operationType) {
    case TaskOperationType.Create:
      addTask(cache, taskOperation);
      break;
    default:
      console.error('Unknown local operation');
  }
};
