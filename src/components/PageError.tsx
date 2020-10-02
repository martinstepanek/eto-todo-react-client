import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from './base/Container';

interface PageErrorProps {
  title: string;
}

const PageError: FC<PageErrorProps> = ({ title, ...props }) => {
  const refresh = () => window.location.reload();

  return (
    <Container {...props}>
      <h1>{title}</h1>
      <p>Your are the best, but something is wrong...</p>
      <button onClick={refresh} type="button">
        Refresh
      </button>
    </Container>
  );
};

export default styled(PageError)`
  p {
    margin-bottom: 45px;
  }
`;
