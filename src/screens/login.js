import React from 'react';
import {Image} from 'react-native';
import StyledButton from '../components/styledButton';
import { Container, ImgContainer, Logo, TInputContainter, StyledTextInput } from './styled/loginRegister.styled';
import CustomStatusBar from '../components/customStatusBar';

const Login = () => {
    return(
        <Container>
            <CustomStatusBar statusBarColor='grey'/>
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

export default Login;