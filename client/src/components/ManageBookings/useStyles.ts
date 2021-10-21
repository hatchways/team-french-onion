import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  calendarWrapper: {
    margin: 'auto',
    '& div.rmdp-calendar': {
      borderRadius: 20,
    },
    '& div.rmdp-day': {
      padding: 16,
    },

    '& .rmdp-day.rmdp-selected span:not(.highlight)': {
      backgroundColor: colors.red[400],
    },
    '& .rmdp-day.rmdp-today span': {
      backgroundColor: colors.lime[400],
    },
    '& .rmdp-day span': {
      fontSize: 25,
    },
    '& .rmdp-header,& div.rmdp-week-day': { fontSize: 30, padding: 30 },
  },
  bookingsContainer: {
    overflowY: 'scroll',
    margin: 'auto',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 10,
      boxShadow: 'inset 0 0 .5rem rgba(0,0,0,.25)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      backgroundColor: 'rgb(180,180,180)',
      boxShadow: 'inset 0 0 .5rem rgba(0,0,0,.25)',
    },
  },
  nxtBooking: {
    margin: '2rem auto',
    width: 800,
  },
  avatarWrapper: {
    padding: 1,
    display: 'inline-block',
  },
  clientName: { fontSize: 20, color: 'rgba(0,0,0,.3)' },
  settingsIcon: { fontSize: 25, color: 'rgba(0,0,0,.3)' },
  settingsIconWrapper: { fontSize: 25, position: 'absolute', right: 0, top: 0 },
  categoryWrapper: {
    width: 630,
    margin: '1.2rem auto',
    padding: 1,
    borderRadius: 10,
    border: '2px solid rgba(180,180,180,.6)',
  },
  calendarContainer: { margin: 'auto', padding: '2rem' },
  avatar: { height: 115, width: 115 },
  reqStatus: { fontSize: 20, color: 'rgba(0,0,0,.3)' },
}));

export default useStyles;
