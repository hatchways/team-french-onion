import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { FieldHookConfig, useField } from 'formik';

interface otherProps {
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  type?: string;
  InputLabelProps?: { shrink: boolean };
  select?: boolean;
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

  const setTypeToDate = () => {
    if (type === 'date') return { type: 'date' };
  };
  const errorCheck = Boolean(meta && meta.touched && meta.error);

  return (
    <TextField
      {...field}
      variant="outlined"
      {...setTypeToDate()}
      placeholder={placeholder}
      error={errorCheck}
      helperText={errorCheck && meta.error}
      multiline={multiline}
      rows={rows}
      select={select}
      {...rest}
    >
      {children}
    </TextField>
  );
};

export default TextFieldWrapper;
