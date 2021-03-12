import { useReducer } from "react";

const initialState = {
  type: "payment",
  name: "",
  provider: null,
  amount: null,
  date: null,
  details: "",
  save_as_template: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "save_as_template":
      return { ...state, [type]: payload.target.checked };
    case "date":
      return { ...state, [type]: payload };
    default:
      return { ...state, [payload.target.name]: payload.target.value };
  }
};

const useHandleForm = () => {
  const [values, dispatch] = useReducer(reducer, initialState);

  const handleChange = type => e => {
    dispatch({
      type,
      payload: e,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ values });
  };

  return { values, handleChange, handleSubmit };
};

export default useHandleForm;
