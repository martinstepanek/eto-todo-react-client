import React, { FC, useState } from 'react';
import { Task } from '../../types/Task';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import { IconAlignJustify } from '../../../../components/icons/IconAlignJustify';
import { DetailBlock } from './DetailBlock';
import { IconRedo } from '../../../../components/icons/IconRedo';

interface TaskItemWithDetailProps {
  task: Task;
}

const TaskItemWithDetail: FC<TaskItemWithDetailProps> = ({
  task,
  ...props
}) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const onDetailClick = () => setIsDetailVisible(!isDetailVisible);
  const hasDetail = task.detail?.length > 0;

  return (
    <div {...props}>
      <div className="task">
        <TaskItem task={task} />
        <div className="icons">
          {task.isRecurrent && (
            <div className="icon-recurrent">
              <IconRedo />
            </div>
          )}
          {hasDetail && (
            <div className="icon" onClick={onDetailClick}>
              <IconAlignJustify />
            </div>
          )}
        </div>
      </div>
      {hasDetail && (
        <DetailBlock isVisible={isDetailVisible} className="detail">
          {task.detail}
        </DetailBlock>
      )}
    </div>
  );
};

export default styled(TaskItemWithDetail)`
  padding: 15px;

  .task {
    display: flex;
  }

  .icons {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .icon {
      padding: 0 15px;
    }

    .icon-recurrent {
      font-size: 0.7rem;
    }
  }

  .detail {
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 15px;
  }
`;
