import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container, Grid, Typography, Paper, MenuItem, Box, List } from '@material-ui/core';
import TextField from './EditProfileControls/TextFieldWrapper';
import ButtonWrapper from './EditProfileControls/ButtonWrapper';
import useStyles from './useStyles';
import { useEffect } from 'react';
import { useState } from 'react';

interface formState {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  email: string;
  phoneNumber: string;
  address: string;
  description: string;
}
const user = {
  firstName: 'Gamaliel',
  lastName: 'Dashua',
  gender: 'MALE',
  birthday: '1991-03-01',
  email: 'gdashua@gmail.com',
  phoneNumber: '08068377631',
  address: 'jos, Nigeria',
  description: 'Tall, slim, blonde hair, humble, jovial',
};
const genderCategories = [
  { id: 1, option: 'MALE' },
  { id: 2, option: 'FEMALE' },
  { id: 3, option: 'OTHER' },
];
const formValidation = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  gender: yup.string().required('Required'),
  birthday: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  phoneNumber: yup
    .number()
    .integer()
    .positive('Please enter a valid phone number')
    .typeError('Please enter a valid phone number')
    .required('Required'),
  address: yup.string().required('Required'),
  description: yup.string().required('Required'),
});

//const submitHandler = (formdata) => {};

const EditProfileForm = (): JSX.Element => {
  const classes = useStyles();
  const { root, formContainer, formCaption, padding, label, formInput, submitBtn, sideBar, sideBarItem, active } =
    classes;

  const [initialFormState, setInitialFormState] = useState<formState>({
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '1991-03-01',
    email: '',
    phoneNumber: '',
    address: '',
    description: '',
  });

  useEffect(() => {
    //pre-populate edit profile form
    console.log(initialFormState);
    setInitialFormState(user);
    console.log('second', initialFormState);
    /*fetch('localhost:3001/profile')
      .then((res) => res.json())
      .then((data) => {
        const { firstName, lastName, gender, birthday, email, phoneNumber, location, description } = data.user;

        const user = {
          firstName: 'Gamaliel',
          lastName: 'Dashua',
          gender: 'male',
          birthDate: '03/05/2000',
          email: 'gdashua@gmail.com',
          phoneNumber: '08068377631',
          address: 'jos, Nigeria',
          description: 'jovial',
        };

        setInitialFormState(user);
      })
      .catch((err) => console.log(err));*/
  }, [initialFormState]);

  return (
    <Grid container className={root}>
      <Grid item xs={2} className={sideBar}>
        <List>
          <Box>
            <Typography className={sideBarItem}>Edit profile</Typography>
          </Box>

          <Box>
            <Typography className={sideBarItem} variant="body2">
              Profile Photo
            </Typography>
          </Box>

          <Box component="div">
            <Typography className={sideBarItem} variant="body2">
              Availability
            </Typography>
          </Box>
          <Box component="div">
            <Typography className={sideBarItem} variant="body2">
              Payment
            </Typography>
          </Box>
          <Box component="div">
            <Typography className={sideBarItem} variant="body2">
              Security
            </Typography>
          </Box>
          <Box component="div">
            <Typography className={sideBarItem} variant="body2">
              Settings
            </Typography>
          </Box>
        </List>
      </Grid>
      <Grid item xs={6}>
        <Grid container className={root}>
          <Grid item xs={12}>
            <Container className={formContainer}>
              <Formik
                initialValues={{
                  ...initialFormState,
                }}
                validationSchema={formValidation}
                onSubmit={(values) => {
                  //submit handler
                  console.log(values);
                }}
              >
                <Paper elevation={6}>
                  <Form className={padding}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography className={formCaption} variant="h4">
                          Edit Profile
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={label} variant="h6">
                          First name
                        </Typography>
                      </Grid>
                      <Grid className={formInput} item xs={9}>
                        <TextField value={initialFormState.firstName} name="firstName" placeholder="John" />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={label} variant="h6">
                          Last name
                        </Typography>
                      </Grid>
                      <Grid className={formInput} item xs={9}>
                        <TextField value={initialFormState.lastName} name="lastName" placeholder="Doe" />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={label} variant="h6">
                          Gender
                        </Typography>
                      </Grid>
                      <Grid className={formInput} item xs={9}>
                        <TextField value={initialFormState.gender} name="gender" select>
                          {genderCategories.map((gender) => {
                            return (
                              <MenuItem key={gender.id} value={gender.option}>
                                {gender.option}
                              </MenuItem>
                            );
                          })}
                        </TextField>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={label} variant="h6">
                          Birth day
                        </Typography>
                      </Grid>
                      <Grid className={formInput} item xs={9}>
                        <TextField
                          value={initialFormState.birthday}
                          name="birthDate"
                          InputLabelProps={{ shrink: true }}
                          type="date"
                        ></TextField>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={label} variant="h6">
                          Email address
                        </Typography>
                      </Grid>
                      <Grid className={formInput} item xs={9}>
                        <TextField value={initialFormState.email} name="email" placeholder="john-doe@gmail.com" />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={label} variant="h6">
                          Phone number
                        </Typography>
                      </Grid>
                      <Grid className={formInput} item xs={9}>
                        <TextField value={initialFormState.phoneNumber} name="phoneNumber" placeholder="Phone" />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={label} variant="h6">
                          Where you live
                        </Typography>
                      </Grid>
                      <Grid className={formInput} item xs={9}>
                        <TextField value={initialFormState.address} name="address" placeholder="Address" />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={label} variant="h6">
                          Describe yourself
                        </Typography>
                      </Grid>
                      <Grid className={formInput} item xs={9}>
                        <TextField
                          value={initialFormState.description}
                          name="description"
                          placeholder="About you"
                          multiline
                          rows={5}
                        />
                      </Grid>
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditProfileForm;
