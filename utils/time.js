const ABOUT_TO_LAPSE_TIME = 3 * 24 * 60 * 60 * 1000;

export const getCurrentTime = () => new Date().getTime();

export const getStatus = dueDate => {
  const currentDate = getCurrentTime();

  const isDue = currentDate > dueDate;
  const isAboutToLapse = !isDue && currentDate > dueDate - ABOUT_TO_LAPSE_TIME;

  if (isDue) return "due";
  if (isAboutToLapse) return "aboutToLapse";
  else return "pending";
};