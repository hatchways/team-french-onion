import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  labels: {
    fontWeight: 'bold',
  },
  appBarButtons: {
    fontFamily: 'Arial',
    fontSize: 14,
    padding: 5,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3);',
      textDecoration: 'underline',
    },
  },
}));

export default useStyles;
