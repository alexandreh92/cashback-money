import React from 'react';
import Segment from '~/components/Backoffice/Segment';
import Table from '~/components/Table';
import _ from 'lodash';

import { Container } from './styles';

const Offers: React.FC = () => {
  return (
    <Container>
      <Segment>
        <Segment.Header>Offers</Segment.Header>
        <Segment.Body noPadding>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>URL</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {_.times(40, () => {
                return (
                  <Table.Row>
                    <Table.DataCell>aiai uauau</Table.DataCell>
                    <Table.DataCell>aiai uauau</Table.DataCell>
                    <Table.DataCell>aiai uauau</Table.DataCell>
                    <Table.DataCell>aiai uauau</Table.DataCell>
                    <Table.DataCell>aiai uauau</Table.DataCell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Segment.Body>
      </Segment>
    </Container>
  );
};

export default Offers;
