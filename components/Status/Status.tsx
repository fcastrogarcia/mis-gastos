import styles from "./styles";

const Status = ({ value, ...rest }: { value?: string }) => {
  if (!value) return null;

  return (
    <styles.Status status={value} {...rest}>
      {value}
    </styles.Status>
  );
};

export default Status;
