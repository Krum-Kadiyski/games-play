import { useState } from 'react';

const useForm = (initalValues, submitCallback) => {
  const [values, setValues] = useState(initalValues);

  const changeHandler = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    submitCallback(values);
  };

  return {
    values,
    changeHandler,
    submitHandler,
  };
};

export default useForm;
