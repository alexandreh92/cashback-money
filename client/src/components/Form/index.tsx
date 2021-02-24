import React, { forwardRef, useImperativeHandle } from 'react';
import {
  useForm,
  FormProvider,
  UseFormMethods,
  ErrorOption,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export interface FormHandles {
  handleResetForm: (values: any) => void;
  handleOnSubmit: () => void;
  setError: (name: string, error: ErrorOption) => void;
  setValue: (fieldName: string, value: string) => void;
  reset: (values: any) => void;
}

interface Props {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children?: React.ReactNode;
  render?: (methods: UseFormMethods<Record<string, any>>) => React.ReactNode;
}

const Form: React.ForwardRefRenderFunction<FormHandles, Props> = (
  { initialValues, children, validationSchema, render, onSubmit, ...props },
  ref
) => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, reset, setError, setValue, control } = methods;

  const handleResetForm = (values: any) => {
    reset(values);
  };

  useImperativeHandle(ref, () => {
    return {
      handleResetForm,
      handleOnSubmit,
      setError,
      setValue,
      control,
      reset,
    };
  });

  const handleOnSubmit = handleSubmit(onSubmit);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleOnSubmit} {...props}>
        {render ? render({ ...methods }) : children}
      </form>
    </FormProvider>
  );
};

export default forwardRef(Form);
