import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.6)',
    paddingLeft: '5px',
  },
  inputs: {
    marginTop: '.8rem',
    height: '2rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    width: 200,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: '#fd513e',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
