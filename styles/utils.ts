export const getColor =
  (color: string, variant: string | number) =>
  ({ theme }: { theme?: any }) => {
    return theme.colors[color][variant];
  };
