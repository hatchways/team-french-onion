import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#fd513e',
    fontWeight: 'bold',
  },
}));

export default useStyles;
