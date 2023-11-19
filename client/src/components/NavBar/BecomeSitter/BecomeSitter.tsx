import useStyles from './useStyles';
import { ChangeEvent, Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Checkbox, FormGroup, Grid, TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Close } from '@material-ui/icons';

const BecomeSitter = (): JSX.Element => {
  const classes = useStyles();

  const [state, setState] = useState({
    mon: false,
    tue: false,
    wed: false,
    thurs: false,
    fri: false,
    sat: false,
    sun: false,
  });

  const [open, setOpen] = useState(false);
  const [isSitter, setIsSitter] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSitter = (event: ChangeEvent<HTMLInputElement>) => {
    setIsSitter(event.target.checked);
  };

  const handleSubmit = () => {
    //TODO: Placeholder for editing profile info to switch between sitter and not a sitter
    console.log('hello');
    setOpen(false);
  };

  return (
    <Fragment>
      <Button className={classes.appBarButtons} onClick={handleClickOpen}>
        Become a sitter
      </Button>
      <Dialog style={{ padding: 50 }} fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
        <Box display="flex" justifyContent="space-between">
          <DialogTitle>
            <Typography color="primary" variant="h6">
              Become a sitter
            </Typography>
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary" type={'submit'}>
              <Close style={{ fontSize: '3rem' }} />
            </Button>
          </DialogActions>
        </Box>

        <DialogContent>
          <DialogContentText>Please set your availability to become a sitter.</DialogContentText>
          <Box
            component="form"
            onSubmit={handleSubmit}
            display={'flex'}
            flexDirection={'column'}
            m={'auto'}
            width={'fit-content'}
          >
            <form>
              <Box display={'flex'} mb={2} alignItems={'center'}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={4}>
                    <Typography className={classes.labels}>
                      {isSitter ? `I'M AVAILABLE` : `I'M NOT AVAILABLE`}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Switch checked={isSitter} onChange={handleSitter} />
                  </Grid>
                </Grid>
              </Box>
              <Box display={'flex'} mb={2} alignItems={'center'}>
                <Grid spacing={3} container>
                  <Grid item>
                    <Typography className={classes.labels}>AVAILABILITY: </Typography>
                  </Grid>
                  <Grid item>
                    <FormGroup>
                      <Box>
                        {Object.entries(state).map(([key, value], index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox checked={value} disabled={!isSitter} onChange={handleChange} name={key} />
                            }
                            label={key}
                          />
                        ))}
                      </Box>
                    </FormGroup>
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <Typography className={classes.labels}>PRICE: </Typography>
                </Grid>
                <Grid item>
                  <TextField disabled={!isSitter} id="price" label="price" variant="outlined" />
                </Grid>
              </Grid>
              <Box padding={3} marginTop={4} textAlign="center">
                <Button size="large" variant="contained" color="primary" type={'submit'}>
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default BecomeSitter;
