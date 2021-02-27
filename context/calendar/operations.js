import types from "./types";
import { getPeriod, getCurrentPeriod } from "utils/time";
import addMonths from "date-fns/addMonths";

export const incrementPeriod = (dispatch, state) => {
  if (!state || !dispatch) throw new Error("No state or dispatch was provided");
  const nextPeriod = addMonths(state.selectedPeriod, 1);
  return dispatch({ type: types.SET_SELECTED_PERIOD, payload: getPeriod(nextPeriod) });
};

export const decrementPeriod = (dispatch, state) => {
  if (!state || !dispatch) throw new Error("No state or dispatch was provided");
  const nextPeriod = addMonths(state.selectedPeriod, -1);
  return dispatch({ type: types.SET_SELECTED_PERIOD, payload: getPeriod(nextPeriod) });
};

export const setCurrentPeriod = dispatch => {
  if (!dispatch) throw new Error("Nodispatch was provided");
  return dispatch({ type: types.SET_SELECTED_PERIOD, payload: getCurrentPeriod() });
};
