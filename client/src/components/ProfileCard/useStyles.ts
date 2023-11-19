import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  picture: {
    borderRadius: '50%',
    width: 80,
    height: 80,
    margin: '1rem auto 0',
  },
  infoWrapper: {
    borderTop: '1px solid #ddd',
    display: 'flex',
    padding: 10,
    justifyContent: 'space-between',
  },
}));

export default useStyles;
