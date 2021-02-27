import styles from "./styles";
import { useCalendarState, useCalendarDispatch } from "context/calendar";
import {
  incrementPeriod,
  decrementPeriod,
  setCurrentPeriod,
} from "context/calendar/operations";

const PeriodSelector = () => {
  const state = useCalendarState();
  const dispatch = useCalendarDispatch();

  const handleBack = () => decrementPeriod(dispatch, state);

  const handleNext = () => incrementPeriod(dispatch, state);

  const handleToday = () => setCurrentPeriod(dispatch);

  return (
    <styles.Container>
      <styles.Back onClick={handleBack}>
        <styles.ArrowBack />
      </styles.Back>
      <styles.Today onClick={handleToday}>Today</styles.Today>
      <styles.Next onClick={handleNext}>
        <styles.ArrowForward />
      </styles.Next>
    </styles.Container>
  );
};

export default PeriodSelector;
