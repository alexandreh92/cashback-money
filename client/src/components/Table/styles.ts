import styled from 'styled-components';

export const Container = styled.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  position: relative;

  & tbody tr {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border: 1px solid ${({ theme }) => theme.colors.tableBorders};
    border-right-width: 0;
    border-left-width: 0;
    padding: 0.35em;

    &:nth-of-type(odd) {
      background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    }
  }

  & th,
  & td {
    padding: 0.625em;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & th {
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.colors.backgroundSecondary};

    -webkit-box-shadow: 0px 1px 1px 0px
      ${({ theme }) => theme.colors.tableBorders};
    -moz-box-shadow: 0px 1px 1px 0px ${({ theme }) => theme.colors.tableBorders};
    box-shadow: 0px 1px 1px 0px ${({ theme }) => theme.colors.tableBorders};

    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};

    height: 40px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & tbody tr {
    color: ${({ theme }) => theme.colors.black};
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  & tfoot tr th {
    box-shadow: unset;
  }

  @media screen and (max-width: 870px) {
    & {
      border: 0;
    }

    & thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    & tr {
      border-bottom: 3px solid ${({ theme }) => theme.colors.tableBorders};
      display: block;
      margin-bottom: 0.625em;
    }

    & td {
      border-bottom: 1px solid ${({ theme }) => theme.colors.tableBorders};
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    & td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    & td:last-child {
      border-bottom: 0;
    }

    & tfoot tr {
      display: flex;
      justify-content: space-between;
      border-bottom: 0;
    }
  }
`;

export const Body = styled.tbody``;

export const Head = styled.thead``;

export const HeaderCell = styled.th``;

export const DataCell = styled.td``;

export const Row = styled.tr``;

export const Foot = styled.tfoot``;
