import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

interface Props {
  color: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  size: 'medium' | 'large' | 'small' | undefined;
  variant: 'text' | 'outlined' | 'contained' | undefined;
}
export const ButtonWrapper: React.FC<Props> = ({ children, color, size, variant, ...rest }): JSX.Element => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  return (
    <Button onClick={handleSubmit} variant={variant} color={color} size={size} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
