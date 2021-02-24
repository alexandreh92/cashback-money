import React from 'react';

import SidebarItem from '~/components/Backoffice/SidebarItem';

import { Container, Sidebar, Content } from './styles';

const Backoffice: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <SidebarItem text="Offers" to="/backoffice/offers" />
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
};

export default Backoffice;
