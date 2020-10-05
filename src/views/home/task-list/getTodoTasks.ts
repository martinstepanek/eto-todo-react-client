import { gql } from '@apollo/client';

const GET_TODO_TASKS = gql`
  query GetTodoTasks {
    today: getTasks(listType: Today) {
      name
      detail
      isDone
      isDelayed
      isDeleted
    }
    thisWeek: getTasks(listType: ThisWeek) {
      name
      detail
      isDone
      isDelayed
      isDeleted
    }
    thisMonth: getTasks(listType: ThisMonth) {
      name
      detail
      isDone
      isDelayed
      isDeleted
    }
  }
`;

export default GET_TODO_TASKS;
