export const getColor = (color: string, variant: string | number) => ({
  theme,
}: {
  theme?: any;
}) => theme.colors[color][variant];
