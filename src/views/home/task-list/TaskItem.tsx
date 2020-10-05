import React, { FC } from 'react';
import { Task } from './Task';

interface TaskItemProps {
  task: Task;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return <div>{task.name}</div>;
};

export default TaskItem;
