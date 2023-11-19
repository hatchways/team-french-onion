import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  calendarWrapper: {
    margin: 'auto',
    '& div.rmdp-calendar': {
      borderRadius: 20,
    },
    '& div.rmdp-day': {
      padding: 8,
      margin: 10,
    },

    '& .rmdp-day.rmdp-selected span:not(.highlight)': {
      backgroundColor: colors.red[400],
    },
    '& .rmdp-day.rmdp-today span': {
      backgroundColor: colors.lime[400],
    },
    '& .rmdp-header,& div.rmdp-week-day': { fontSize: 15, padding: 8 },
  },
  bookingsContainer: {
    overflowY: 'scroll',
    paddingRight: '.8rem',
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
    maxWidth: 650,
  },
  avatarWrapper: {
    padding: 5,
    display: 'flex',
    alignItems: 'center',
  },
  clientName: { color: 'rgba(0,0,0,.3)' },
  settingsIcon: { fontSize: 25, color: 'rgba(0,0,0,.3)' },
  settingsIconWrapper: { fontSize: 25, position: 'absolute', right: 0, top: 0 },
  categoryWrapper: {
    margin: '1.2rem auto',
    padding: 15,
    borderRadius: 10,
    border: '2px solid rgba(180,180,180,.6)',
  },
  calendarContainer: { margin: 'auto', padding: '2rem 0' },
  avatar: { height: 66, width: 66 },
  reqStatus: { fontSize: 13, color: 'rgba(0,0,0,.3)' },
}));

export default useStyles;

// const isStringExpressionBalanced = (str) => {
//   if (!str) return 'Invalid input';

//   const stack = [str[0]];
//   const openBrackets = ['(', '{', '['];
//   const closedBrackets = [')', '}', ']'];

//   if (closedBrackets.includes(str[0])) return 'Not balanced';

//   for (let x = 1; x < str.length; x++) {
//     if (str[x] === closedBrackets[openBrackets.indexOf(stack[stack.length - 1])]) {
//       stack.pop();
//     } else {
//       stack.push(str[x]);
//     }
//   }

//   return !stack.length ? 'Balanced' : 'Not balanced';
// };

// isStringExpressionBalanced('[(])');
