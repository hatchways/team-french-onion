import { useState } from 'react';
import useStyles from './useStyles';
import { Calendar } from 'react-multi-date-picker';
import 'react-calendar/dist/Calendar.css';

const CalendarWrapper = (): JSX.Element => {
  const { calendarWrapper } = useStyles();
  const [value, setValue] = useState(new Date());
  return (
    <Calendar
      readOnly
      className={calendarWrapper}
      multiple
      value={[new Date(2021, 9, 23), new Date(2021, 9, 29), new Date(2021, 9, 11)]}
    />
  );
};

export default CalendarWrapper;
