import React,{useState} from 'react'
import styled from 'styled-components';
import Button from './UI/Button';

//center the output
const OutputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

//style input
const Input = styled.input`

    width: 100px;
    height: 30px;
    border-radius: 12px;
    border: 1px solid darkgrey;
    padding: 5px;
    background-color: #ccc;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #ddd;
    }
    &:active {
        background-color: #eee;
    }
`;


function Converter() {
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState(0);
    const [unit, setUnit] = useState("kg");

    const convert = () => {
        if (unit === "kg") {
            setResult(weight * 2.20462);
            setUnit("lbs");
        } else {
            setResult(weight * 0.453592);
            setUnit("kg");
        }
    }

    return (
        <OutputContainer>
            <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <Button onClick={convert}>Convert</Button>
            <h2>{result} {unit}</h2>
        </OutputContainer>
    )
}

export default Converter