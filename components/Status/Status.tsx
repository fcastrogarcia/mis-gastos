import styles from "./styles";

const Status = ({ status, ...rest }: { status: string }) => {
  return (
    <styles.Status status={status} {...rest}>
      {status}
    </styles.Status>
  );
};

export default Status;
