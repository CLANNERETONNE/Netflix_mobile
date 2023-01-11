import React from "react";
import styled from "styled-components";

const Navbar = () => {
    return(
        <Container>
            <Logo />
            <SearchButton />
        </Container>
    );
};

const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.20);
`;
const  Logo = styled.View`
    width: 30px;
    height: 30px;
    background-color: ${props => props.theme.textPrimary};
    margin-left: 15px;
`;
const  SearchButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border: 4px solid ${props => props.theme.textPrimary};
    border-radius: 30px;
    margin-right: 15px;
`;


export default Navbar;