import React from 'react';
import {Image} from 'react-native';
import StyledButton from '../components/styledButton';
import styled from 'styled-components';


const Login = () => {
    return(
        <Container>
            <ImgContainer>
                <Image style={{height: 70, width: 270,}} source={require('../img/Netflix.png')}/>
            </ImgContainer>
            <TInputContainter>
                <StyledTextInput placeholder="Adressse e-mail" placeholderTextColor="#8F8F8F"/>
                <StyledTextInput placeholder="Mot de passe" placeholderTextColor="#8F8F8F"/>
            </TInputContainter>
            <StyledButton butonTitle="Se connecter" buttonType= "filled" goTo="Home"/>
            <StyledButton butonTitle="Créer un compte" buttonType= "bordered" goTo="Register"/>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    background-color: ${props => props.theme.primary};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

//  ----- Image ----- //
const ImgContainer = styled.View`
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.Image`
    width: 414;
    height: 126;
`;

//  ----- TextInput ----- //
const TInputContainter = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledTextInput = styled.TextInput`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textPrimary};
    width: 90%;
    height: 48px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export default Login;