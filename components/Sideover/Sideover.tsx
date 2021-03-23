import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styles from "./styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  progress: {
    width: "100%",
    position: "absolute",
    top: 0,
    height: 5,
    zIndex: 110,
  },
});

interface Props {
  open: boolean;
  title: string;
  handleClose: VoidFunction;
  children: JSX.Element;
  loading?: boolean;
}

const Sideover = ({ title, open, handleClose, loading, children }: Props) => {
  const classes = useStyles();

  return (
    <>
      <styles.Drawer anchor="right" open={open} onClose={handleClose}>
        {loading && <LinearProgress className={classes.progress} />}
        <ClickAwayListener onClickAway={handleClose}>
          <>
            <styles.Header>
              <styles.Title>{title}</styles.Title>
              <styles.Close onClick={handleClose} size={28} />
            </styles.Header>
            <styles.Container>{children}</styles.Container>
          </>
        </ClickAwayListener>
      </styles.Drawer>
    </>
  );
};

export default Sideover;
