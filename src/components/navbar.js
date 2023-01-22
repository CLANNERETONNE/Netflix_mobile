import React from "react";
import styled from "styled-components";
import {useNavigation} from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();

    return(
        <Container>
            <Logo source={require('../img/Netflix_N.png')}/>
            <NavRight>
                <SearchButton onPress={() => navigation.navigate(`Search`)}/>
                <ProfilButton />
            </NavRight>
        </Container>
    );
};

const Container = styled.View`
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.20);
    z-index: 5;
`;
const  Logo = styled.Image`
    width: 17.7px;
    height: 32px;
    margin-left: 15px;
`;

const NavRight = styled.View`
    justify-content: flex-end;
    flex-direction: row;
`;

const  SearchButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    border: 3px solid ${props => props.theme.textPrimary};
    border-radius: 30px;
    margin-right: 15px;
`;

const  ProfilButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    background-color: ${props => props.theme.textPrimary};
    border-radius: 30px;
    margin-right: 15px;
`;


export default Navbar;