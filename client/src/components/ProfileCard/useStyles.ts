import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  picture: {
    borderRadius: '50%',
    width: 150,
  },
  infoWrapper: {
    borderTop: '1px solid grey',
    display: 'flex',
    padding: 5,
    justifyContent: 'space-evenly',
  },
}));

export default useStyles;
