import { createContext, useContext, useState, useMemo } from "react";
import { node, string } from "prop-types";
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  progress: {
    width: "100%",
    position: "absolute",
    top: 0,
    height: 5,
    zIndex: 110,
  },
});

const LoadingContext = createContext();

export default function LoadingProvider({ className, children, ...rest }) {
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const value = useMemo(() => ({ loading, setLoading }), [loading, setLoading]);

  return (
    <LoadingContext.Provider value={value}>
      <>
        {loading && <LinearProgress className={classes.progress} />}
        <main className={cx("container", className)} {...rest}>
          {children}
        </main>
      </>
    </LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: node.isRequired,
  className: string,
};

LoadingProvider.defaultProps = {
  className: "",
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);

  if (context === undefined)
    throw new Error("LoadingStateContext must be within LoadingProvider");

  return context;
};
