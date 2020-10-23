import { gql } from '@apollo/client';
import TASK_CONTENT from '../taskContent';

const GET_TODO_TASKS = gql`
  query GetTodoTasks {
    today: getTasks(listType: Today) {
      ...TaskContent
    }
    thisWeek: getTasks(listType: ThisWeek) {
      ...TaskContent
    }
    thisMonth: getTasks(listType: ThisMonth) {
      ...TaskContent
    }
  }
  ${TASK_CONTENT}
`;

export default GET_TODO_TASKS;
