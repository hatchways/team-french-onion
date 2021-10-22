import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { FieldHookConfig, useField, useFormikContext } from 'formik';

interface otherProps {
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  type?: string;
  InputLabelProps?: { shrink: boolean };
  select?: boolean;
  variant?: string;
}

const TextFieldWrapper: React.FC<otherProps & TextFieldProps & FieldHookConfig<string>> = ({
  name,
  placeholder,
  multiline,
  rows,
  children,
  select,
  type,
  ...rest
}): JSX.Element => {
  const [field, meta] = useField(name);

  const errorCheck = Boolean(meta && meta.touched && meta.error);
  return (
    <TextField
      {...field}
      placeholder={placeholder}
      error={errorCheck}
      helperText={errorCheck && meta.error}
      multiline={multiline}
      rows={rows}
      select={select}
      type={type}
      {...rest}
    >
      {children}
    </TextField>
  );
};

export default TextFieldWrapper;
