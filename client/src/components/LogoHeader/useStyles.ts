import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid red',
  },
  logo: {
    display: 'flex',
    flexGrow: 1,
    margin: 20,
  },
}));

export default useStyles;
