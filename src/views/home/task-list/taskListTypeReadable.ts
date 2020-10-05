import { TaskListType } from './TaskListType';

export default {
  [TaskListType.Todo]: 'Todo',
  [TaskListType.Today]: 'Today',
  [TaskListType.Tomorrow]: 'Tomorrow',
  [TaskListType.ThisWeek]: 'This Week',
  [TaskListType.NextWeek]: 'Next Week',
  [TaskListType.ThisMonth]: 'This Month',
  [TaskListType.NextMonth]: 'Next Month',
};
