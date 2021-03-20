import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styles from "./styles";

interface Props {
  open: boolean;
  title: string;
  handleClose: VoidFunction;
  children: JSX.Element;
}

const Sideover = ({ title, open, handleClose, children }: Props) => {
  return (
    <styles.Drawer anchor="right" open={open} onClose={handleClose}>
      <ClickAwayListener onClickAway={handleClose}>
        <>
          <styles.Header>
            <styles.Title>{title}</styles.Title>
            <styles.Close onClick={handleClose} size={32} />
          </styles.Header>
          <styles.Container>{children}</styles.Container>
        </>
      </ClickAwayListener>
    </styles.Drawer>
  );
};

export default Sideover;
