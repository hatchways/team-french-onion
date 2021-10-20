import React, { useState, useEffect, FormEvent, SyntheticEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { Card, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import { CardContent } from '@mui/material';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';

export default function Payment(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState<string | boolean | undefined>('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState<string>('');
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  /*
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    
  }, []);*/

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        Checkout
        <Box component={'form'}></Box>
      </CardContent>
    </Card>
  );
}
