import { gql } from '@apollo/client';

const TASK_CONTENT = gql`
  fragment TaskContent on Task {
    name
    detail
    isDone
    isDelayed
    isDeleted
  }
`;

export default TASK_CONTENT;
