import React, { FC } from 'react';
import { Task } from '../../types/Task';
import TaskItemWithDetail from './TaskItemWithDetail';
import { TaskListType } from '../../types/TaskListType';

interface TaskListProps {
  tasks: Task[];
  listType: TaskListType;
}

const TaskList: FC<TaskListProps> = ({ tasks, listType }) => {
  return (
    <>
      {tasks.map(task => (
        <TaskItemWithDetail task={task} key={task.taskId + listType} />
      ))}
    </>
  );
};

export default TaskList;
