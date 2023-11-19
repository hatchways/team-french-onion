import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { mockProfiles } from '../../mocks/mockProfile';
import Autocomplete from '@mui/material/Autocomplete';
import Calendar from '@mui/icons-material/Event';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Home from './Home';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  const handleSubmit = () => {
    console.log('submitted');
  };

  useEffect(() => {
    if (!loggedInUser) {
      history.push('/login');
    }
    initSocket();
  }, [initSocket, history, loggedInUser]);

  return <Home />;
}
