import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';

interface Props {
  isSubmitting: boolean;
}

const SingupButton = ({ isSubmitting }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
      {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Create'}
    </Button>
  );
};

export default SingupButton;
