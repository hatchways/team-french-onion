import { Typography, Grid, Paper, Box, Avatar } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import useStyles from './useStyles';
import CalendarWrapper from './CalendarWrapper';

const bookings = [
  [
    { date: '8 April 2020, 7-9 PM', imgUrl: './test2.png', name: 'Charles Compton', status: 'ACCEPTED' },
    { date: '30 March 2020, 8-12 AM', imgUrl: './test2.png', name: 'Joan Blokeney', status: 'DECLINED' },
  ],
  [
    { date: '21 March 2020, 3-10 PM', imgUrl: './test2.png', name: 'Michael Camahan', status: 'ACCEPTED' },
    { date: '12 March 2020, 6-11 AM', imgUrl: './test2.png', name: 'Smith Myler', status: 'ACCEPTED' },
    { date: '26 March 2020, 2-8 PM', imgUrl: './test2.png', name: 'Alisha Keys', status: 'DECLINED' },
    { date: '17 March 2020, 7-3 PM', imgUrl: './test2.png', name: 'Jhonson Wiley', status: 'ACCEPTED' },
    { date: '11 March 2020, 8-6 AM', imgUrl: './test2.png', name: 'Roberto McGee', status: 'DECLINED' },
  ],
];

const ManageBookings = (): JSX.Element => {
  const {
    bookingsContainer,
    avatarWrapper,
    nxtBooking,
    settingsIcon,
    clientName,
    settingsIconWrapper,
    categoryWrapper,
    avatar,
    calendarContainer,
    reqStatus,
  } = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box paddingX={5} marginX="auto">
          <Grid container>
            <Grid item xs={12}>
              <Box className={nxtBooking}>
                <Paper
                  elevation={4}
                  style={{
                    backgroundImage: 'linear-gradient(to right top, #ef5350, #f4665e, #f8776d, #fb877c, #fe978b)',
                  }}
                >
                  <Box padding={3} marginBottom={3}>
                    <Box marginBottom={2}>
                      <Typography style={{ fontWeight: 'bolder', color: 'gold' }} variant="body1">
                        YOUR NEXT BOOKING
                      </Typography>
                    </Box>

                    <Grid container>
                      <Grid item xs={7}>
                        <Typography variant="subtitle1">8 April 2020, 10-12 AM</Typography>
                        <Box className={avatarWrapper}>
                          <Avatar src="nxtBkng.png" className={avatar} />
                        </Box>
                        <Typography style={{ color: '#fff' }} component="h2" variant="h6">
                          Norma Byers
                        </Typography>
                      </Grid>
                      <Grid item xs={5} style={{ position: 'relative' }}>
                        <Box className={settingsIconWrapper}>
                          <Settings className={settingsIcon} />
                        </Box>
                        <Box marginY={7}>
                          <Typography component="h2" variant="subtitle1" className={clientName}></Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ padding: 10 }}>
                <Box className={bookingsContainer} height={1000} paddingBottom={1}>
                  {bookings.map((set, index) => {
                    return (
                      <>
                        <Box padding=".5rem 1rem">
                          <Typography style={{ color: '#ef5350' }} component="h2" variant="body1">
                            {index === 0 ? 'CURRENT BOOKINGS' : 'PASS BOOKINGS'}
                          </Typography>
                        </Box>

                        {set.map((item) => {
                          const { date, imgUrl, name, status } = item;
                          return (
                            <>
                              <Box className={categoryWrapper}>
                                <Grid container>
                                  <Grid item xs={7}>
                                    <Typography variant="subtitle2">{date}</Typography>
                                    <Box className={avatarWrapper}>
                                      <Avatar src={imgUrl} className={avatar} />
                                      <Box padding={3}>
                                        <Typography variant="subtitle1" component="span">
                                          {name}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={5} style={{ position: 'relative' }}>
                                    <Box className={settingsIconWrapper}>
                                      <Settings className={settingsIcon} />
                                    </Box>
                                    <Box marginY={7}>
                                      <Typography variant="h6" className={reqStatus}>
                                        {status}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={calendarContainer}>
          <CalendarWrapper />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ManageBookings;
