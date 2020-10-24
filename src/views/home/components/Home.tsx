import React, { FC, useRef, useState } from 'react';
import { TaskListType } from '../types/TaskListType';
import TaskListPage from './task-list/TaskListPage';
import styled from 'styled-components';
import PlusButton from '../../../components/base/form/buttons/PlusButton';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import colors from '../../../styles/colors';
import CreateTaskForm from './create-task-form/CreateTaskForm';
import { FormHandle } from './task-form/TaskForm';

const Home: FC = props => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const formRef = useRef<FormHandle>(null);

  const onFormVisibilityChange = value => {
    setIsFormOpen(value);
    if (formRef && formRef.current) {
      if (value) {
        formRef.current.open();
      } else {
        formRef.current.close();
      }
    }
  };

  const onPlusButtonClick = () => {
    onFormVisibilityChange(true);
  };

  return (
    <div {...props}>
      <TaskListPage listType={TaskListType.Todo} />
      <PlusButton className="plus-button" onClick={onPlusButtonClick} />
      <SwipeableBottomSheet
        open={isFormOpen}
        scrollTopAtClose={true}
        onChange={onFormVisibilityChange}
      >
        <CreateTaskForm ref={formRef} onSubmit={() => setIsFormOpen(false)} />
      </SwipeableBottomSheet>
    </div>
  );
};

export default styled(Home)`
  position: relative;
  overflow: auto;
  height: 100%;

  .plus-button {
    position: absolute;
    bottom: 100px;
    right: 20px;
  }

  .react-swipeable-view-container,
  .react-swipeable-view-container > div,
  .react-swipeable-view-container > div > div {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${colors.background} !important;
  }
`;
