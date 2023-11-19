import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { mockProfile1 } from '../../mocks/mockProfile';
import { Alert } from '@material-ui/lab';
import { FormikHelpers } from 'formik';
import 'react-image-gallery/styles/css/image-gallery.css';
import * as Yup from 'yup';

import { Formik } from 'formik';
import MyGallery from '../../components/Slider/Slider';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();
  const { photos, hourlyRate, availability, lastName, firstName, description, location } = mockProfile1;

  const [sendRequest, setSendRequest] = useState<boolean>(false);

  const handleSendRequest = () => {
    setSendRequest(true);
  };

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/');
    return <CircularProgress />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item sm={7}>
          <Box paddingY={3}>
            <Paper elevation={10} className={classes.paperItem}>
              {/**TODO: Refactor to information from Profile of loggedinuser */}
              {/* <Box position={'relative'} display={'flex'} justifyContent={'center'}>
                <ArrowRight onClick={handleRightArrow} className={classes.arrowRight} />
                <ArrowLeft onClick={handleLeftArrow} className={classes.arrowLeft} />
                <CardMedia component="img" image={photos[currPhotoPage]} className={classes.image} />
              </Box>
              <Typography variant={'h4'} align={'center'} className={classes.headerText}>
                {`${firstName} ${lastName}`}
              </Typography>
              <Typography variant={'h6'} align={'center'}>
                {`${location}`}
              </Typography>
              <Typography align={'center'}>{`Availability ${availability?.day?.join(' ')}`}</Typography>
              <Typography>About Me</Typography>
              <Typography>{description}</Typography> */}
              <MyGallery images={photos} />
              <Box padding={3}>
                <Typography variant="h5" color="primary" align={'center'} className={classes.headerText}>
                  {`${firstName} ${lastName}`}
                </Typography>
                <Typography variant={'h6'} align={'center'}>
                  {`${location}`}
                </Typography>
                <Typography align={'center'}>{`Availability: ${availability?.day?.join(' ')}`}</Typography>
                <Typography variant="button" color="primary">
                  About Me
                </Typography>
                <Typography>{description}</Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item sm={5}>
          <Box paddingY={3}>
            <Paper elevation={10} className={classes.paperItem}>
              <Typography variant={'h4'} align={'center'} className={classes.headerText}>
                {`$${hourlyRate}/hr`}
              </Typography>
              <Box py={4} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Formik
                  initialValues={{ where: 'lag', di: '2023-11-05', do: '2023-12-09' }}
                  validationSchema={Yup.object().shape({
                    where: Yup.string().required('Location is required'),
                    di: Yup.string().required('Drop in is required'),
                    do: Yup.string().required('Drop off is required'),
                  })}
                  onSubmit={(vals) => console.log(vals)}
                >
                  {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                    <form onSubmit={handleSubmit} noValidate name="guestSearchForm">
                      <Box maxWidth={300} marginX="auto">
                        <TextField
                          label={<Typography>Start Date</Typography>}
                          margin="normal"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="di"
                          type="date"
                          helperText={touched.di ? errors.di : ''}
                          error={touched.di && Boolean(errors.di)}
                          value={values.di}
                          variant="outlined"
                          onChange={handleChange}
                        >
                          Drop in
                        </TextField>
                        <TextField
                          label={<Typography>End Date</Typography>}
                          margin="normal"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="do"
                          type="date"
                          helperText={touched.do ? errors.do : ''}
                          error={touched.do && Boolean(errors.do)}
                          value={values.do}
                          variant="outlined"
                          onChange={handleChange}
                        >
                          Drop off
                        </TextField>
                      </Box>
                    </form>
                  )}
                </Formik>
              </Box>
              <Box marginBottom={3}>
                {!sendRequest ? (
                  <Box textAlign="center" marginBottom={2}>
                    <Button color="primary" variant="outlined" style={{ width: 150 }} onClick={handleSendRequest}>
                      {' '}
                      Send Request
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    <Alert severity="success">Request sent!</Alert>
                  </Box>
                )}
                <Box textAlign="center">
                  <Button color="primary" variant="contained" style={{ width: 150 }}>
                    Message
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
