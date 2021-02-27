import types from "./types";
import { getPeriod } from "utils/time";
import addMonths from "date-fns/addMonths";

export const incrementPeriod = (dispatch, state) => {
  const nextPeriod = addMonths(state.selectedPeriod, 1);
  return dispatch({ type: types.SET_SELECTED_PERIOD, payload: getPeriod(nextPeriod) });
};

export const decrementPeriod = (dispatch, state) => {
  const nextPeriod = addMonths(state.selectedPeriod, -1);
  return dispatch({ type: types.SET_SELECTED_PERIOD, payload: getPeriod(nextPeriod) });
};

export const setCurrentPeriod = dispatch => {
  return dispatch({ type: types.SET_SELECTED_PERIOD, payload: getPeriod(new Date()) });
};
