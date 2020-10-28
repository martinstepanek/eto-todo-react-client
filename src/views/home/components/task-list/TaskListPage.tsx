import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import GET_TASKS from '../../operations/getTasks';
import { TaskListType } from '../../types/TaskListType';
import GET_TODO_TASKS from '../../operations/getTodoTasks';
import TaskList from './TaskList';
import taskListTypeReadable from './taskListTypeReadable';
import { ListHeading } from './ListHeading';
import ListHeadingSeparator from './ListHeadingSeparator';

interface TaskListPageProps {
  listType: TaskListType;
}

const TaskListPage: FC<TaskListPageProps> = ({ listType }) => {
  const query = listType === TaskListType.Todo ? GET_TODO_TASKS : GET_TASKS;
  const { loading, data } = useQuery(query, {
    variables: { listType },
  });

  if (loading) {
    return <>Loading</>;
  }

  if (listType === TaskListType.Todo) {
    return (
      <>
        <ListHeading>Today</ListHeading>
        <TaskList tasks={data.today} />
        <ListHeadingSeparator>This Week</ListHeadingSeparator>
        <TaskList tasks={data.thisWeek} />
        <ListHeadingSeparator>This Month</ListHeadingSeparator>
        <TaskList tasks={data.thisMonth} />
      </>
    );
  }

  return (
    <>
      <ListHeading>{taskListTypeReadable[listType]}</ListHeading>
      <TaskList tasks={data.tasks} />
    </>
  );
};

export default TaskListPage;
