import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  labels: {
    fontWeight: 'bold',
  },
  appBarButtons: {
    fontSize: 15,
    textUnderlineOffset: 2,
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3);',
    },
  },
}));

export default useStyles;
