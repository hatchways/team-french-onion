import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import login from '../../helpers/APICalls/login';
import { demoUser } from '../../mocks/mockUser';
import { useState } from 'react';

export default function DemoUser(): JSX.Element {
  const classes = useStyles();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { updateSnackBarMessage } = useSnackBar();
  const { updateLoginContext } = useAuth();
  const { email, password } = demoUser;

  const handleLogin = () => {
    login(email, password).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });
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
    >
      {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Demo User'}
    </Button>
  );
}
