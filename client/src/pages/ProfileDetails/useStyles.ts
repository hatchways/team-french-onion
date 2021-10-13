import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  paperItem: {
    marginTop: 35,
    marginLeft: 65,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export default useStyles;
