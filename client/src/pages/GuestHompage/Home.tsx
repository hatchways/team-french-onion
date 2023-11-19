import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@material-ui/core';

import { Formik } from 'formik';
import * as Yup from 'yup';
import hero from './large.jpeg';
import useStyles from './useStyles';

const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <Box
        display="flex"
        padding={2}
        minHeight="100vh"
        justifyContent="space-between"
        maxWidth={1000}
        alignItems="center"
        marginX="auto"
      >
        <Grid container spacing={5} alignItems="center">
          <Grid
            item
            sm={5}
            // style={{ padding: '4rem', background: 'linear-gradient(45deg, #fea89f 0%, #C5923744 100%)' }}
          >
            <Box marginY={5}>
              <Typography style={{ fontWeight: 'bolder', color: '#333' }} variant="h3">
                Find the Care your Pet deserves
              </Typography>
            </Box>
            <Box width="70%">
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
                    <Box>
                      <TextField
                        id="where"
                        label={<Typography>Where</Typography>}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="where"
                        helperText={touched.where ? errors.where : ''}
                        error={touched.where && Boolean(errors.where)}
                        value={values.where}
                        variant="outlined"
                        onChange={handleChange}
                      />
                    </Box>
                    <Box display="flex">
                      <TextField
                        label={<Typography>Drop in</Typography>}
                        margin="normal"
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
                        label={<Typography>Drop off</Typography>}
                        margin="normal"
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
                    <Box marginY={2}>
                      <Button
                        className={classes.submit}
                        type="submit"
                        size="large"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <CircularProgress style={{ height: '100%', color: 'white' }} size="1.5em" thickness={10} />
                        ) : (
                          'Find my pet sitter'
                        )}
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
          <Grid item sm={7}>
            <Box>
              <img
                style={{
                  width: '100%',
                  height: '75vh',
                  filter: 'grayscale(35%) sepia(6%) brightness(119%) saturate(223%) opacity(88%) contrast(97%)',
                }}
                src={`${hero}`}
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
