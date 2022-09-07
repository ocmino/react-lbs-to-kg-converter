//create styled button component

import React from "react";
import styled from "styled-components";

const Button = styled.button`
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

const ButtonClick = (props) => {
    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    );
}

export default ButtonClick;
