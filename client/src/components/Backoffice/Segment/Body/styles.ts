import styled from 'styled-components';

type ContainerProps = {
  noPadding?: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;

  padding: ${({ noPadding }) => (noPadding ? '0' : '20px')};
`;
