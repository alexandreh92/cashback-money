import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
`;

export const Sidebar = styled.aside`
  width: 240px;

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.45);

  @media (max-width: 940px) {
    width: 120px;
  }
`;

export const Content = styled.section`
  display: flex;
`;
