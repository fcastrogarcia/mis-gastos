import { createContext, useContext, useState, useMemo } from "react";
import { node } from "prop-types";

const LoadingContext = createContext();
export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const value = useMemo(() => ({ loading, setLoading }), [loading, setLoading]);

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}

LoadingProvider.propTypes = {
  children: node.isRequired,
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);

  if (context === undefined)
    throw new Error("LoadingStateContext must be within LoadingProvider");

  return context;
};
