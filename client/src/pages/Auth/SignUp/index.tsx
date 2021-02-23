import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';

import { FormHandles } from '~/components/Form';
import Input from '~/components/Input';

import { Container, Form, Welcomes, Button, Link } from '../SignIn/styles';

import AuthActions from '~/store/ducks/auth';

const { signUpRequest } = AuthActions;

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const schema = Yup.object().shape({
  email: Yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have, at least, 6 chars'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Password not match')
    .required('Password confirmation is required'),
});

const SignUp: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  /* Callbacks */
  const handleOnSubmit: SubmitHandler<typeof initialValues> = useCallback(
    ({ name, email, password, passwordConfirmation }) => {
      dispatch(signUpRequest(name, email, password, passwordConfirmation));
    },
    [dispatch]
  );

  /* Effects */

  return (
    <Container>
      <Welcomes>
        Earn money with Cashback<span>Money</span>
      </Welcomes>

      <Form
        ref={formRef}
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleOnSubmit}
      >
        <Input name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="E-Mail" />
        <Input type="password" name="password" placeholder="Password" />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
        />

        <Button type="submit" text="REGISTER" />
      </Form>
      <Link to="sign_in">Already registered? Sign-in</Link>
    </Container>
  );
};

export default SignUp;
