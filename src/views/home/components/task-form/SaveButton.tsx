import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/base/form/buttons/Button';
import colors from '../../../../styles/colors';

const SaveButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return <Button {...props}>Save</Button>;
};

export default styled(SaveButton)`
  background-color: ${colors.textBackground};
  color: ${colors.primary};

  &:disabled {
    background-color: ${colors.textBackground};
    border: 0;
    color: ${colors.mutedText};
  }
`;
