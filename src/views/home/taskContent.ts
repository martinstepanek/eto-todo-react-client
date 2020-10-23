import { gql } from '@apollo/client';

const TASK_CONTENT = gql`
  fragment TaskContent on Task {
    taskId
    name
    detail
    isDone
    isDelayed
    isDeleted
  }
`;

export default TASK_CONTENT;
