import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import GET_TASKS from './getTasks';
import { TaskListType } from './TaskListType';
import GET_TODO_TASKS from './getTodoTasks';
import TaskList from './TaskList';
import taskListTypeReadable from './taskListTypeReadable';

interface TaskListPageProps {
  listType: TaskListType;
}

const TaskListPage: FC<TaskListPageProps> = ({ listType }) => {
  const query = listType === TaskListType.Todo ? GET_TODO_TASKS : GET_TASKS;
  const { loading, error, data } = useQuery(query, {
    variables: { listType },
  });

  if (loading) {
    return <>Loading</>;
  }

  if (listType === TaskListType.Todo) {
    return (
      <>
        <h2>Today</h2>
        <TaskList tasks={data.today} />
        <h2>This Week</h2>
        <TaskList tasks={data.thisWeek} />
        <h2>This Month</h2>
        <TaskList tasks={data.thisMonth} />
      </>
    );
  }

  return (
    <>
      <h2>{taskListTypeReadable[listType]}</h2>
      <TaskList tasks={data.tasks} />
    </>
  );
};

export default TaskListPage;
