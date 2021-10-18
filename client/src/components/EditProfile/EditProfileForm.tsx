import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useEffect, useCallback, useState } from 'react';
import { Container, Grid, Typography, Paper, MenuItem } from '@material-ui/core';
import ButtonWrapper from './InputControls/ButtonWrapper';
import useStyles from './useStyles';
import TextFieldWrapper from './InputControls/TextFieldWrapper';

interface formState {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  email: string;
  phoneNumber: string;
  location: string;
  description: string;
}
const user = {
  firstName: 'Rihanna',
  lastName: 'Robyn',
  gender: 'FEMALE',
  birthday: '1991-03-01',
  email: 'riro@gmail.com',
  phoneNumber: '22384893879',
  location: 'Bridgetown, Barbados',
  description: 'I have been a taking care of pets ever since I was a child. I have great passion for what i do!',
};
const txtFieldsProps = [
  { title: 'First name', fieldName: 'firstName', placeholder: 'John' },
  { title: 'Last name', fieldName: 'lastName', placeholder: 'Doe' },
  { title: 'Gender', fieldName: 'gender', placeholder: '' },
  { title: 'Birthday', fieldName: 'birthday', placeholder: '' },
  { title: 'Email address', fieldName: 'email', placeholder: 'john-doe@gmail.com' },
  { title: 'Phone Number', fieldName: 'phoneNumber', placeholder: 'Phone' },
  { title: 'Where you live', fieldName: 'location', placeholder: 'Location' },
  { title: 'Describe yourself', fieldName: 'description', placeholder: 'About you' },
];
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
  location: yup.string().required('Required'),
  description: yup.string().required('Required'),
});

const EditProfileForm = (): JSX.Element => {
  const classes = useStyles();
  const { formContainer, formCaption, padding, label, formInput, submitBtn } = classes;
  const [initialFormState, setInitialFormState] = useState<formState>({
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '1994-03-01',
    email: '',
    phoneNumber: '',
    location: '',
    description: '',
  });

  const upDateProfileDetails = useCallback((newValues): void => {
    fetch('localhost:3001/profile/update', {
      method: 'PUT',
      body: newValues,
    })
      .then((res) => res.json())
      .then((data) => {
        const { profile } = data;
        console.log(profile);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setInitialFormState(user);
    /*fetch('localhost:3001/profile')
      .then((res) => res.json())
      .then((data) => {
        const {user} = data;
        setInitialFormState(user);
      })
      .catch((err) => console.log(err));*/
  }, [initialFormState]);
  return (
    <Container className={formContainer}>
      <Formik
        initialValues={{
          ...initialFormState,
        }}
        enableReinitialize
        validationSchema={formValidation}
        onSubmit={(values) => {
          upDateProfileDetails(JSON.stringify(values));
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
              {txtFieldsProps.map(({ title, fieldName, placeholder }) => {
                const isADropDown = fieldName === 'gender';
                const isDate = fieldName === 'birthday';
                const isTxtArea = fieldName === 'description';
                return (
                  <>
                    <Grid item xs={3}>
                      <Typography className={label} variant="h6">
                        {title}
                      </Typography>
                    </Grid>
                    <Grid className={formInput} item xs={9}>
                      <TextFieldWrapper
                        type={isDate ? 'date' : undefined}
                        select={isADropDown}
                        multiline={isTxtArea}
                        rows={isTxtArea ? 5 : undefined}
                        name={fieldName}
                        placeholder={placeholder}
                        variant="outlined"
                      >
                        {isADropDown &&
                          genderCategories.map(({ id, option }) => {
                            return (
                              <MenuItem key={id} value={option}>
                                {option}
                              </MenuItem>
                            );
                          })}
                      </TextFieldWrapper>
                    </Grid>
                  </>
                );
              })}
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
export default EditProfileForm;
