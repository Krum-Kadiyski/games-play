import { useEffect, useState } from 'react';

const useForm = (initalValues, submitCallback) => {
  const [values, setValues] = useState(initalValues);

  useEffect(() => {
    setValues(initalValues);
  }, [initalValues]);

  const changeHandler = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await submitCallback(values);

    setValues(initalValues);
  };

  return {
    values,
    changeHandler,
    submitHandler,
  };
};

export default useForm;
