import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import login from '../../helpers/APICalls/login';
import { demoUser } from '../../mocks/mockUser';
import { useFormikContext } from 'formik';
import { useState } from 'react';

const DemoUserButton = (): JSX.Element => {
  const classes = useStyles();
  const { isSubmitting } = useFormikContext();
  const [isSubmittingDemo, setIsSubmittingDemo] = useState(false);
  const { updateSnackBarMessage } = useSnackBar();
  const { updateLoginContext } = useAuth();
  const { email, password } = demoUser;

  const handleLogin = () => {
    login(email, password).then((data) => {
      if (data?.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error(data);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Button
      onClick={handleLogin}
      type="submit"
      size="large"
      variant="contained"
      color="primary"
      className={classes.demoButton}
      form={undefined}
    >
      {isSubmitting ? (
        <CircularProgress style={{ height: '100%', color: 'white' }} size="1.5em" thickness={10} />
      ) : (
        'Demo User'
      )}
    </Button>
  );
};

export default DemoUserButton;
