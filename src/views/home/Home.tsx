import React, { FC } from 'react';
import { TaskListType } from './task-list/TaskListType';
import TaskListPage from './task-list/TaskListPage';

const Home: FC = () => {
  return <TaskListPage listType={TaskListType.Todo} />;
};

export default Home;
