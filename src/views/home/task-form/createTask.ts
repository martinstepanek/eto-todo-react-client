import { gql } from '@apollo/client';

const CREATE_TASK = gql`
  mutation CreateTask($task: TaskInput!) {
    createTask(task: $task) {
      taskId
    }
  }
`;

export default CREATE_TASK;
