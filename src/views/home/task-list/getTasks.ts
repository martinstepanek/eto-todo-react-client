import { gql } from '@apollo/client';

const GET_TASKS = gql`
  query GetTasks($listType: TaskListType!) {
    getTasks(listType: $listType) {
      name
      detail
      isDone
      isDelayed
      isDeleted
    }
  }
`;

export default GET_TASKS;
