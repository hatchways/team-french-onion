import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profileCard: {
    textDecoration: 'none',
    overflow: 'hidden',
    '&:hover': {
      overflow: 'auto',
      boxShadow: theme.shadows[23],
    },
  },
  picture: {
    borderRadius: '50%',
    width: 150,
  },
  pictureWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  infoWrapper: {
    borderTop: '1px solid grey',
  },
}));

export default useStyles;
