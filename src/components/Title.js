import styled from "styled-components";

const Title = styled.h1`
  //center title and set font size
  text-align: center;
  font-size: 2em;
  color: #fff;
  margin: 0;
  padding: 0;
  background-color: #333;
  padding: 10px;
  margin-top: 75px;

  //animate the title to float up and down
  animation: float 2s ease-in-out infinite;
  @keyframes float {
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

export default Title;
