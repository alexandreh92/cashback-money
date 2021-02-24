import React, { ChangeEvent, InputHTMLAttributes, useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Container, Input, Label } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  defaultValue?: any;
  label?: string;
}

const Checkbox: React.FC<Props> = ({ name, defaultValue, label, ...props }) => {
  const { control, setValue } = useFormContext();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(name, e.target.checked);
    },
    [name, setValue]
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ value }) => (
        <Container {...props}>
          <Input
            id={name}
            type="checkbox"
            checked={value}
            onChange={handleChange}
          />
          <Label htmlFor={name}>{label}</Label>
        </Container>
      )}
    />
  );
};

export default Checkbox;
