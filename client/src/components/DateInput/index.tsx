import React, { useCallback } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { Container, TInput, ErrorMessage } from './styles';

interface Props {
  name: string;
  defaultValue?: any;
  placeholder?: string;
}

const DateInput: React.FC<Props> = ({
  name,
  defaultValue,
  placeholder,
  ...props
}) => {
  const { control, errors, setValue } = useFormContext();

  const handleChange = useCallback(
    (val: Date) => {
      setValue(name, val);
    },
    [name, setValue]
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ value }) => (
        <Container>
          <TInput
            dateFormat="dd/MM/yyyy"
            selected={value}
            onChange={handleChange}
            placeholderText={placeholder}
            {...props}
          />
          {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </Container>
      )}
    />
  );
};

export default DateInput;
