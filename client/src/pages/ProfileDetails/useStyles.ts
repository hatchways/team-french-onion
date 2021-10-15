import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridItem: {},
  paperItem: {
    marginTop: 35,
    marginLeft: 65,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerText: {
    paddingTop: 20,
  },
}));

export default useStyles;
