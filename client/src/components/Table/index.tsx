import React from 'react';

import {
  Container,
  Body,
  Head,
  Row,
  DataCell,
  HeaderCell,
  Foot,
} from './styles';

interface Props {}

type SectionProps<P> = React.FC<P> & {
  Body: typeof Body;
  Head: typeof Head;
  Row: typeof Row;
  DataCell: typeof DataCell;
  HeaderCell: typeof HeaderCell;
  Foot: typeof Foot;
};

const Table: SectionProps<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

Table.Body = Body;
Table.Head = Head;
Table.Row = Row;
Table.DataCell = DataCell;
Table.HeaderCell = HeaderCell;
Table.Foot = Foot;

export default Table;
