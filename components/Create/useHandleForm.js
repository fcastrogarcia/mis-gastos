import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const initialState = {
  type: "payment",
  name: null,
  provider: null,
  amount: null,
  due_date: null,
};

const useHandleForm = () => {
  const [data, setData] = useState(initialState);

  const router = useRouter();
  const { query: { type } = {} } = router;

  const handleClick = e => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (type) setData(prev => ({ ...prev, type }));
  }, [type]);

  return { data, handleClick };
};

export default useHandleForm;
