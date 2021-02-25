import React, { useCallback, useEffect, useRef } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { parseISO } from 'date-fns';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';

import BackOfficeOfferActions from '~/store/ducks/backoffice/offers';

import api from '~/services/api';

import Segment from '~/components/Backoffice/Segment';
import { FormHandles } from '~/components/Form';
import Input from '~/components/Input';
import Checkbox from '~/components/Checkbox';
import DateInput from '~/components/DateInput';

import { Container, Formulary, Row, Submit } from './styles';
import { toastr } from 'react-redux-toastr';

const { createOfferRequest, updateOfferRequest } = BackOfficeOfferActions;

const initialValues = {
  id: undefined,
  advertiser_name: '',
  description: '',
  url: '',
  starts_at: '',
  ends_at: '',
  premium: false,
  enabled: false,
};

const schema = Yup.object().shape({
  advertiser_name: Yup.string().required('Advertiser name is required'),
  description: Yup.string()
    .required('Description is required')
    .max(500, 'Max. 500 chars'),
  url: Yup.string().url('Invalid URL').required('URL is required'),
  starts_at: Yup.string().required('Starts at is required'),
  ends_at: Yup.string(),
});

interface Params {
  id?: string;
}

const Form: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();
  const { id } = useParams<Params>();

  const formRef = useRef<FormHandles>(null);

  /* Callbacks */
  const handleOnSubmit: SubmitHandler<typeof initialValues> = useCallback(
    (values) => {
      const fn = id
        ? updateOfferRequest(values, id)
        : createOfferRequest(values);
      dispatch(fn);
    },
    [dispatch, id]
  );

  const getOfferProperties = useCallback(async () => {
    try {
      const { data } = await api.get(`/backoffice/offers/${id}`);

      const { starts_at, ends_at, ...atrs } = data;

      console.log(starts_at, ends_at);

      formRef.current?.reset({
        ...atrs,
        starts_at: parseISO(starts_at),
        ends_at: ends_at ? parseISO(ends_at) : '',
      });
    } catch (err) {
      toastr.error('Error', 'An error has ocurred');
    }
  }, [id]);

  /* Effects */
  useEffect(() => {
    if (id) {
      getOfferProperties();
    }
  }, [id, getOfferProperties]);

  return (
    <Container>
      <Segment>
        <Segment.Header>{id ? 'Edit Offer' : 'New Offer'}</Segment.Header>
        <Segment.Body>
          <Formulary
            ref={formRef}
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleOnSubmit}
          >
            <Row>
              <Input name="advertiser_name" placeholder="Advertiser Name" />
              <Input name="description" placeholder="Description" />
              <Input name="url" placeholder="URL" />
            </Row>
            <Row>
              <DateInput name="starts_at" placeholder="Starts At" />
              <DateInput name="ends_at" placeholder="Ends At" />
              <Checkbox name="premium" label="Premium?" />
              <Checkbox name="enabled" label="Enabled?" />
            </Row>
            <Submit type="submit" text={id ? 'Update Offer' : 'Create Offer'} />
          </Formulary>
        </Segment.Body>
      </Segment>
    </Container>
  );
};

export default Form;
