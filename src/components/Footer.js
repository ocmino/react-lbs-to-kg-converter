//create a footer with a random image from unsplash

import React from "react";
import styled from "styled-components";

const Footer = () => {
    const [image, setImage] = React.useState("");
    
    React.useEffect(() => {
        fetch("https://source.unsplash.com/random")
        .then((res) => setImage(res.url))
        .catch((err) => console.log(err));
    }, []);
    
    return (
        <FooterContainer>
        <img src={image} alt="random" />
        </FooterContainer>
    );
    };

    const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
    `;

    export default Footer;