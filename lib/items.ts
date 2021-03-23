export const getTypes = (type: string | string[]): string[] => {
  if (typeof type === "string") return Array(type);
  else return type;
};
