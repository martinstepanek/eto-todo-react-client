import React, { FC } from 'react';
import { Button } from './Button';
import styled from 'styled-components';

const PlusButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return <Button {...props}>+</Button>;
};

export default styled(PlusButton)`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;
