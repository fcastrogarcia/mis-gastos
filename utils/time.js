import startOfMonth from "date-fns/startOfMonth";
import isSameMonth from "date-fns/isSameMonth";
import format from "date-fns/format";

const ABOUT_TO_LAPSE_TIME = 3 * 24 * 60 * 60 * 1000;

export const getPeriod = date => {
  if (!date) return null;

  return startOfMonth(date);
};

export const getCurrentPeriod = () => getPeriod(new Date());

export const getCurrentTime = () => new Date().getTime();

export const getStatus = dueDate => {
  const currentDate = getCurrentTime();

  const isDue = currentDate > dueDate;
  const isAboutToLapse = !isDue && currentDate > dueDate - ABOUT_TO_LAPSE_TIME;

  if (isDue) return "overdue";
  if (isAboutToLapse) return "about to lapse";
  else return "pending";
};

export const getCurrentItems = (items = [], selectedPeriod) => {
  if (!Array.isArray(items) || !selectedPeriod) return false;

  return items.filter(({ period }) => {
    return isSameMonth(new Date(period), selectedPeriod);
  });
};

export const getDate = (isPayment, due_date, date, selectedPeriod) => {
  if (!due_date && isPayment) return format(new Date(selectedPeriod), "MMM");
  return format(new Date(isPayment ? due_date : date), "MMM d");
};
