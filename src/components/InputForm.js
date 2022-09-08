//create input form with "enter weight" and "convert" button and display the output with the output component

import React, { useState } from "react";
import styled from "styled-components";
import Converter from "./Output";

const InputForm = () => {
  const [weight, setWeight] = useState("");

  const handleWeight = (weight) => {
    setWeight(weight);
  };

  //style inputcontainer
  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;
  //create inputtext
  const InputText = styled.div`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 10px;
  `;

  //return calculated weight on button click
  return (
    <InputContainer>
      <InputText>Enter Weight</InputText>
      <Converter weight={weight} />
    </InputContainer>
  );
};

export default InputForm;
