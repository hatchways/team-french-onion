import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './useStyles';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { mockProfiles } from '../../mocks/mockProfile';
import Autocomplete from '@mui/material/Autocomplete';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useRef } from 'react';

export default function Home(): JSX.Element {
  const defaultDate = useRef(new Date());
  const classes = useStyles();
  const handleSubmit = () => {
    console.log('submitted');
  };
  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <Formik
        initialValues={{
          sitter: '',
          start: `${defaultDate.current.getFullYear()}-${
            defaultDate.current.getMonth() + 1
          }-${defaultDate.current.getDate()}`,
          end: `${defaultDate.current.getFullYear()}-${
            defaultDate.current.getMonth() + 1
          }-${defaultDate.current.getDate()}`,
        }}
        validationSchema={Yup.object().shape({
          sitter: Yup.string().required('Location is required'),
          start: Yup.string().required('Start date is required'),
          end: Yup.string().required('End is required'),
        })}
        onSubmit={(vals) => console.log(vals)}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <form onSubmit={handleSubmit} noValidate name="guestSearchForm">
            <Grid container className={classes.searchWrapper}>
              <Grid>
                {/**
                 * create a search function and apply it when onKeyUp event is fired
                 */}
                <Typography style={{ fontWeight: 'bold' }} variant="h5">
                  Search for Users
                </Typography>
              </Grid>
              <Grid justify="center" alignItems="center" spacing={2} container>
                <Grid item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={[1, 2, 3, 4]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Sitter" variant="standard" />}
                  />
                </Grid>
                <Grid item>
                  <Box display="flex">
                    <TextField
                      label={<Typography>From</Typography>}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="start"
                      type="date"
                      helperText={touched.start ? errors.start : ''}
                      error={touched.start && Boolean(errors.start)}
                      value={values.start}
                      variant="outlined"
                      onChange={handleChange}
                    >
                      Drop in
                    </TextField>
                    <TextField
                      label={<Typography>to</Typography>}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="end"
                      type="date"
                      helperText={touched.end ? errors.end : ''}
                      error={touched.end && Boolean(errors.end)}
                      value={values.end}
                      variant="outlined"
                      onChange={handleChange}
                    >
                      Drop off
                    </TextField>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      {/**TODO:
       * 1. Each Card should be a link to the userprofile route
       * 2. Currently using mock profiles, need to change to actual list of profiles from api call
       **/}
      <Grid container justify="center">
        <Box display="flex" justifyContent="center" className={classes.listingsWrapper}>
          <Grid justify="center" container spacing={3}>
            {Array.from(mockProfiles).map((profile, index) => (
              <Grid container item sm={4} key={profile._id} className={classes.listingItem}>
                <ProfileCard profile={mockProfiles[index]}></ProfileCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid container className={classes.searchWrapper}>
        <Box display="flex" justifyContent="center">
          <Button variant="outlined">Show more</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
