import { gql } from '@apollo/client';
import TASK_CONTENT from '../taskContent';

const CREATE_TASK = gql`
  mutation CreateTask($task: TaskInput!) {
    createTask(task: $task) {
      operationType
      task {
        ...TaskContent
      }
      inLists
    }
  }
  ${TASK_CONTENT}
`;

export default CREATE_TASK;
