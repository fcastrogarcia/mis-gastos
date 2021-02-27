import { createContext, useReducer, useContext } from "react";
import { getCurrentPeriod } from "utils/time";
import types from "./types";
import { node } from "prop-types";

const CalendarStateContext = createContext();
const CalendarDispatchContext = createContext();

const initialState = {
  currentPeriod: getCurrentPeriod(),
  selectedPeriod: getCurrentPeriod(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_SELECTED_PERIOD:
      return { ...state, selectedPeriod: action.payload };
    default:
      return state;
  }
};

export default function CalendarProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
}

CalendarProvider.propTypes = {
  children: node.isRequired,
};

export function useCalendarState() {
  const context = useContext(CalendarStateContext);

  if (context === undefined) {
    throw new Error("useCalendarState must be used within a CountProvider");
  }

  return context;
}

export function useCalendarDispatch() {
  const context = useContext(CalendarDispatchContext);

  if (context === undefined) {
    throw new Error("useCalendarDispatch must be used within a CountProvider");
  }

  return context;
}
