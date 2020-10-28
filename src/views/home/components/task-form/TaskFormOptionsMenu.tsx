import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../../../../styles/colors';
import SaveButton from './SaveButton';
import { IconAlignJustify } from '../../../../components/icons/IconAlignJustify';
import { IconCalendarCheck } from '../../../../components/icons/IconCalendarCheck';

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
        <IconAlignJustify className="icon" onClick={onDetailClick} />
        <IconCalendarCheck className="icon" onClick={onCalendarClick} />
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
