import React, { useState } from "react";

function useInput(valueValidator) {
  const [value,setValue] = useState('');
  const [isTouched,setIsTouched] = useState(false);

  const valueIsValid = valueValidator(value);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) =>{
    setValue(event.target.value);
  }

  const inputLoseFocusHandler = () =>{
    setIsTouched(true);
  }

  const reset = () =>{
    setIsTouched(false);
    setValue('');
  }

  return {
    value,
    isTouched,
    hasError,
    isValid:valueIsValid,
    valueChangeHandler,
    inputLoseFocusHandler,
    reset,
  };
}

export default useInput;
