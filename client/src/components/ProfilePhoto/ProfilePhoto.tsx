import { Formik, Form } from 'formik';
import { Container, Grid, Typography, Paper, Box, Input, Button, Avatar } from '@material-ui/core';
import useStyles from './useStyles';
import { useEffect, useState, useCallback } from 'react';

interface formState {
  image: File | undefined;
}

const ProfilePhoto = (): JSX.Element => {
  const {
    formContainer,
    formHeader,
    uploadInput,
    profilePicDisplay,
    profilePicDisplayAvatar,
    uploadInputField,
    uploadInputBtn,
    profilePicDisplayInstruction,
  } = useStyles();

  const [initialFormState, setInitialFormState] = useState<formState>();
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgUrlUpdateIndicator, signalImgUrlUpdate] = useState<boolean>(true);

  const setToCurrentProfilePic = useCallback((): void => {
    fetch('localhost:3001/profile')
      .then((res) => res.json())
      .then((data) => {
        const { profilePic } = data.profile.photos;
        setImgUrl(profilePic);
        return { sucess: { message: data.message } };
      })
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  }, []);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { files } = e.target;

      const formData = new FormData();
      files && files[0] && formData.append('picture', files[0]);

      fetch('localhost:3001/profile/upload', {
        method: 'POST',
        body: 'formData',
      })
        .then((res) => res.json())
        .then((data) => {
          setToCurrentProfilePic();
          signalImgUrlUpdate(!imgUrlUpdateIndicator);
          return { sucess: { message: data.message } };
        })
        .catch(() => ({
          error: { message: 'Unable to connect to server. Please try again' },
        }));
    },
    [imgUrlUpdateIndicator, setToCurrentProfilePic],
  );

  useEffect(() => {
    setToCurrentProfilePic();
  }, [setToCurrentProfilePic]);

  return (
    <Container className={formContainer}>
      <Formik
        initialValues={{ ...initialFormState }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
        }}
      >
        <Paper elevation={6}>
          <Form>
            <Grid container spacing={3}>
              <Grid className={formHeader} item xs={12}>
                <Typography variant="h3">Profile Photo</Typography>
              </Grid>
              <Grid item xs={12} className={profilePicDisplay}>
                <Avatar className={profilePicDisplayAvatar} src={imgUrl} />
                <Box className={profilePicDisplayInstruction}>
                  <Typography style={{ textAlign: 'center' }} variant="h6">
                    Be sure to use a photo that clearly show your face
                  </Typography>
                </Box>
              </Grid>
              <Grid className={uploadInput} item xs={12}>
                <Button
                  htmlFor="uploadProfilePic"
                  component="label"
                  color="secondary"
                  size="large"
                  variant="outlined"
                  className={uploadInputBtn}
                >
                  upload a file from your device
                </Button>
                <Input
                  onChange={onChangeHandler}
                  className={uploadInputField}
                  type="file"
                  name="profilePic"
                  id="uploadProfilePic"
                />
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Formik>
    </Container>
  );
};

export default ProfilePhoto;
