import styled from 'styled-components';

export interface DetailBlockProps {
  isVisible: boolean;
}

const DetailBlock = styled.div<DetailBlockProps>`
  overflow-y: hidden;
  font-size: 0.9rem;

  ${({ isVisible }) =>
    isVisible
      ? `
       max-height: 100px;
       transition: 0.2s ease;

           `
      : `
       max-height: 0;
       transition: 0.1s ease;

    `}

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export { DetailBlock };
