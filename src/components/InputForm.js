//create input form with "enter weight" and "convert" button

import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";

const InputFormControl = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  input {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;
  }


`;

const Error = styled.div`
  color: red;
  font-size: 0.8em;
  margin-top: 10px;

  animation: bounce 0.5s;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const InputForm = () => {
  const [weight, setWeight] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  const handleClick = () => {
    if (weight === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const inputStyle = {
    backgroundColor: error ? "salmon" : "white",
    border: error ? "1px solid red" : "1px solid #ccc",
  };

  return (
    <InputFormControl>
      <input
        type="number"
        placeholder="Enter weight"
        value={weight}
        onChange={handleChange}
        style={inputStyle}
      />
        <Button onClick={handleClick}>Convert</Button>
      {error && <Error>Please enter a weight</Error>}
    </InputFormControl>
  );
};

export default InputForm;
