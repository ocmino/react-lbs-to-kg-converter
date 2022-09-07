//create a styled card component with rounded corner and shadow

import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background-color: lightblue;

    //make card responsive
    @media (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
    
  
`;

export default Card;
