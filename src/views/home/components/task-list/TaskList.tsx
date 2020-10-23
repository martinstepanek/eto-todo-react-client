import React, { FC } from 'react';
import { Task } from '../../types/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map(task => (
        <TaskItem task={task} key={task.taskId} />
      ))}
    </>
  );
};

export default TaskList;
