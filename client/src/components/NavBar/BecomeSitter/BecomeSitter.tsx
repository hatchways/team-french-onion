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
import { Checkbox, FormGroup, TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

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
    console.log('hello');
    setOpen(false);
  };

  return (
    <Fragment>
      <Button className={classes.appBarButtons} onClick={handleClickOpen}>
        Become a sitter
      </Button>
      <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
        <DialogTitle>Become a sitter</DialogTitle>
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
            <FormControl>
              <Box display={'flex'} mb={2} alignItems={'center'}>
                <Typography className={classes.labels}>{isSitter ? `I'M AVAILABLE` : `I'M NOT AVAILABLE`}</Typography>
                <Switch checked={isSitter} onChange={handleSitter} />
              </Box>
              <Box display={'flex'} mb={2} alignItems={'center'}>
                <Typography className={classes.labels}>AVAILABILITY:</Typography>
                <FormGroup>
                  <Box>
                    {Object.entries(state).map(([key, value], index) => (
                      <FormControlLabel
                        key={index}
                        control={<Checkbox checked={value} disabled={!isSitter} onChange={handleChange} name={key} />}
                        label={key}
                      />
                    ))}
                  </Box>
                </FormGroup>
              </Box>
              <Box display={'flex'} mb={2} alignItems={'center'}>
                <Typography className={classes.labels}>PRICE</Typography>
                <TextField disabled={!isSitter} id="price" label="price" variant="outlined" />
              </Box>
              <Button type={'submit'}>Save</Button>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default BecomeSitter;
