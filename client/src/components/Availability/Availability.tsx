import { useState } from 'react';
import { Box, Container, Grid, Typography, Paper } from '@material-ui/core';
import { Formik, Form } from 'formik';
import useStyles from './useStyles';
import TextFieldWrapper from '../EditProfile/InputControls/TextFieldWrapper';
import ButtonWrapper from '../EditProfile/InputControls/ButtonWrapper';
import * as yup from 'yup';

interface formState {
  slot1a: string;
  slot2a: string;
  slot3a: string;
  slot4a: string;
  slot5a: string;
  slot6a: string;
  slot7a: string;
  slot8a: string;
  slot1b: string;
  slot2b: string;
  slot3b: string;
  slot4b: string;
  slot5b: string;
  slot6b: string;
  slot7b: string;
  slot8b: string;
  slot1c: string;
  slot2c: string;
  slot3c: string;
  slot4c: string;
  slot5c: string;
  slot6c: string;
  slot7c: string;
  slot8c: string;
}

const formValidation = yup.object().shape({
  slot1a: yup.string(),
  slot2a: yup.string(),
  slot3a: yup.string(),
  slot4a: yup.string(),
  slot5a: yup.string(),
  slot6a: yup.string(),
  slot7a: yup.string(),
  slot8a: yup.string(),
  slot1b: yup.string(),
  slot2b: yup.string(),
  slot3b: yup.string(),
  slot4b: yup.string(),
  slot5b: yup.string(),
  slot6b: yup.string(),
  slot7b: yup.string(),
  slot8b: yup.string(),
  slot1c: yup.string(),
  slot2c: yup.string(),
  slot3c: yup.string(),
  slot4c: yup.string(),
  slot5c: yup.string(),
  slot6c: yup.string(),
  slot7c: yup.string(),
  slot8c: yup.string(),
});

const Availability = (): JSX.Element => {
  const [initialFormState, setInitialFormState] = useState<formState>({
    slot1a: '01:00',
    slot2a: '14:00',
    slot3a: '12:30',
    slot4a: '21:00',
    slot5a: '09:30',
    slot6a: '17:00',
    slot7a: '05:30',
    slot8a: '11:00',
    slot1b: '04:30',
    slot2b: '19:30',
    slot3b: '02:00',
    slot4b: '23:30',
    slot5b: '12:00',
    slot6b: '20:30',
    slot7b: '11:00',
    slot8b: '14:00',
    slot1c: 'Monday',
    slot2c: 'Monday',
    slot3c: 'Tuesday',
    slot4c: 'Wednesday',
    slot5c: 'Thursday',
    slot6c: 'Thursday',
    slot7c: 'Friday',
    slot8c: 'Sunday',
  });
  const { formContainer, formCaption, padding, submitBtn } = useStyles();

  return (
    <Container className={formContainer}>
      <Formik
        initialValues={{
          ...initialFormState,
        }}
        enableReinitialize
        validationSchema={formValidation}
        onSubmit={(values, actions) => {
          JSON.stringify(values);
          actions.setSubmitting(false);
        }}
      >
        <Paper elevation={6}>
          <Form className={padding}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography className={formCaption} variant="h4">
                  Your Availability
                </Typography>
              </Grid>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <>
                  <Grid item xs={5}>
                    <Box textAlign="center">
                      <TextFieldWrapper variant="filled" name={'slot' + item + 'c'} />
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h6">From </Typography>
                    <TextFieldWrapper name={'slot' + item + 'a'} type="time" />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h6">To </Typography>
                    <TextFieldWrapper name={'slot' + item + 'b'} type="time" />
                  </Grid>
                </>
              ))}
              <Grid className={submitBtn} item xs={12}>
                <ButtonWrapper variant="contained" color="primary" size="large">
                  Save
                </ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Formik>
    </Container>
  );
};

export default Availability;
