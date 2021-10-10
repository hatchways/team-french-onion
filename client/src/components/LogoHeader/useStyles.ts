import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    maxHeight: 50,
    flexGrow: 3,
    margin: 10,
  },
  logoText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
    paddingTop: 10,
  },
}));

export default useStyles;
