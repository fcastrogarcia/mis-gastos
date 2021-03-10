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
  const [values, setValues] = useState(initialState);

  const router = useRouter();
  const { query: { type } = {} } = router;

  const handleChange = e => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log("submitaaa");
  };

  useEffect(() => {
    if (type) setValues(prev => ({ ...prev, type }));
  }, [type]);

  return { values, handleChange, handleSubmit };
};

export default useHandleForm;
