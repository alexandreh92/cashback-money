import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import _ from 'lodash';

import { ApplicationState } from '~/@types';

import OffersActions from '~/store/ducks/offers';

import Card from '~/components/Card';

import {
  Title,
  Container,
  InputWrapper,
  InputContainer,
  Input,
  Icon,
} from './styles';

const { getOffersRequest } = OffersActions;

const Offers: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();

  const { offers, current_page, total_pages } = useSelector(
    (state: ApplicationState) => state.offers
  );

  const [search, setSearch] = useState('');

  /* Callbacks */
  const handleGetOffersNextPage = () => {
    dispatch(getOffersRequest(search, current_page + 1));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncer(e.target.value);
  };

  const debouncer = _.debounce((value: string) => {
    setSearch(value);
  }, 1000);

  /* Effects */
  useEffect(() => {
    dispatch(getOffersRequest(search, 1));
  }, [dispatch, search]);

  return (
    <Fragment>
      <Title>
        Get your <span>Ca$hbacks</span> now!
      </Title>
      <InputWrapper>
        <InputContainer>
          <Input
            placeholder="Search by offer name..."
            onChange={handleSearchChange}
          />
          <Icon />
        </InputContainer>
      </InputWrapper>
      <InfiniteScroll
        dataLength={offers.length}
        next={handleGetOffersNextPage}
        hasMore={current_page < total_pages}
        loader={null}
        scrollableTarget="main-body"
      >
        <Container>
          {offers.map((offer) => (
            <Card key={offer.id} offer={offer} />
          ))}
        </Container>
      </InfiniteScroll>
    </Fragment>
  );
};

export default Offers;
