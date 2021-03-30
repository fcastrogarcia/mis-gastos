import { useState } from "react";
import { mutate } from "swr";
import { api } from "lib/api";

type Operation = () => Promise<any>;

const useSideoverOperation = () => {
  const [loading, setLoading] = useState(false);

  const handleOperation = (operation: Operation) => () => {
    setLoading(true);
    operation().finally(() => {
      setLoading(false);
      closeSideover();
      mutate(api.GET_ITEMS);
    });
  };

  return { handleOperation, loading, setLoading };
};

export default useSideoverOperation;
