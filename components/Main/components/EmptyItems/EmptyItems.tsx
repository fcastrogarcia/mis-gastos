import styles from "./styles";

const EmptyItems = () => (
  <styles.Container>
    <styles.Paper variant="outlined">
      <styles.Message>You have no items for this month.</styles.Message>
    </styles.Paper>
  </styles.Container>
);

export default EmptyItems;
