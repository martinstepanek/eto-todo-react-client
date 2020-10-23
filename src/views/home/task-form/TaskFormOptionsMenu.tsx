import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import SaveButton from './SaveButton';

interface TaskFormOptionsMenuProps {
  onDetailClick: () => void;
  onCalendarClick: () => void;
  saveButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const TaskFormOptionsMenu: FC<TaskFormOptionsMenuProps> = ({
  onDetailClick,
  onCalendarClick,
  saveButtonProps,
  ...props
}) => {
  return (
    <div {...props}>
      <div>
        <FontAwesomeIcon
          icon={faAlignJustify}
          onClick={onDetailClick}
          className="icon"
        />
        <FontAwesomeIcon
          icon={faCalendarCheck}
          onClick={onCalendarClick}
          className="icon"
        />
      </div>
      <SaveButton {...saveButtonProps} />
    </div>
  );
};

export default styled(TaskFormOptionsMenu)`
  padding: 15px;
  color: ${colors.primary};
  display: flex;
  justify-content: space-between;

  .icon {
    margin-right: 30px;
    font-size: 22px;
  }
`;
