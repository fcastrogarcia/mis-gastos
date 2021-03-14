import { node, string } from "prop-types";
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useLoadingContext } from "context/loading";

const useStyles = makeStyles({
  progress: {
    width: "100%",
    position: "absolute",
    top: 0,
    height: 5,
    zIndex: 110,
  },
});

export const LoadingContainer = ({ className, children, ...rest }) => {
  const { loading } = useLoadingContext();
  const classes = useStyles();

  return (
    <>
      {loading && <LinearProgress className={classes.progress} />}
      <main className={cx("container", className)} {...rest}>
        {children}
      </main>
    </>
  );
};

LoadingContainer.propTypes = {
  children: node.isRequired,
  className: string,
};

LoadingContainer.defaultProps = {
  className: "",
};
