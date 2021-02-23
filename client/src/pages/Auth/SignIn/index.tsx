import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';

import { FormHandles } from '~/components/Form';
import Input from '~/components/Input';

import AuthActions from '~/store/ducks/auth';

import { Container, Form, Welcomes, Button, Link } from './styles';

const { signInRequest } = AuthActions;

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have, at least, 6 chars'),
});

const SignIn: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  /* Callbacks */
  const handleOnSubmit: SubmitHandler<typeof initialValues> = useCallback(
    ({ email, password }) => {
      dispatch(signInRequest(email, password));
    },
    [dispatch]
  );

  /* Effects */

  return (
    <Container>
      <Welcomes>
        Welcome to Cashback<span>Money</span>
      </Welcomes>

      <Form
        ref={formRef}
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleOnSubmit}
      >
        <Input type="email" name="email" placeholder="E-Mail" />
        <Input type="password" name="password" placeholder="Password" />

        <Button type="submit" text="GET MY CASHBACKS" />
      </Form>
      <Link to="sign_up">Not a member? Sign-up here</Link>
    </Container>
  );
};

export default SignIn;
