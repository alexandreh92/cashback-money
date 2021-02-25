import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import _ from 'lodash';

import { ApplicationState } from '~/@types';

import BackofficeOffersActions from '~/store/ducks/backoffice/offers';

import Segment from '~/components/Backoffice/Segment';
import Table from '~/components/Table';

import {
  Container,
  ActionsContainer,
  ActionLink,
  ActionButton,
  Left,
  Right,
  SearchContainer,
  SearchIcon,
  SearchInput,
  NewButton,
  ExternalLink,
} from './styles';

const { getOffersRequest, toggleStatusRequest } = BackofficeOffersActions;

const Offers: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();

  const { offers, current_page, total_pages } = useSelector(
    (state: ApplicationState) => state.backofficeOffers
  );

  const [search, setSearch] = useState('');

  /* Callbacks */
  const handleGetOffersNextPage = () => {
    dispatch(getOffersRequest(search, current_page + 1));
  };

  const handleToggleOfferStatus = (id: number) => {
    dispatch(toggleStatusRequest(id));
  };

  const debouncer = _.debounce((value: string) => {
    setSearch(value);
  }, 1000);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncer(e.target.value);
  };

  /* Effects */
  useEffect(() => {
    dispatch(getOffersRequest(search, 1));
  }, [dispatch, search]);

  return (
    <Container>
      <Segment>
        <Segment.Header>
          <Left>Offers</Left>
          <Right>
            <SearchContainer>
              <SearchInput onChange={handleSearchChange} />
              <SearchIcon />
            </SearchContainer>
            <NewButton to="offers/new">New Offer</NewButton>
          </Right>
        </Segment.Header>
        <Segment.Body noPadding>
          <InfiniteScroll
            dataLength={offers.length}
            next={handleGetOffersNextPage}
            hasMore={current_page < total_pages}
            loader={null}
            scrollableTarget="main-segment"
          >
            <Table>
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>URL</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Enabled</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {offers.map((offer) => (
                  <Table.Row key={offer.id}>
                    <Table.DataCell data-label="ID">{offer.id}</Table.DataCell>
                    <Table.DataCell data-label="Name">
                      {offer.advertiser_name}
                    </Table.DataCell>
                    <Table.DataCell data-label="URL">
                      <ExternalLink href={offer.url}>{offer.url}</ExternalLink>
                    </Table.DataCell>
                    <Table.DataCell data-label="Status">
                      {offer.status ? 'enabled' : 'disabled'}
                    </Table.DataCell>
                    <Table.DataCell data-label="Enabled">
                      {`${offer.enabled}`}
                    </Table.DataCell>
                    <Table.DataCell data-label="Actions">
                      <ActionsContainer>
                        <ActionLink to={`offers/edit/${offer.id}`}>
                          edit
                        </ActionLink>
                        <ActionButton
                          onClick={() => handleToggleOfferStatus(offer.id)}
                        >
                          {offer.status ? 'disable' : 'enable'}
                        </ActionButton>
                      </ActionsContainer>
                    </Table.DataCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </InfiniteScroll>
        </Segment.Body>
      </Segment>
    </Container>
  );
};

export default Offers;
