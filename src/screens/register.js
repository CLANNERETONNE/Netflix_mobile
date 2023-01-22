import React from 'react';
import {Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, ImgContainer, Logo, TInputContainter, StyledTextInput } from './styled/loginRegister.styled';
import StyledButton from '../components/styledButton';
import CustomStatusBar from '../components/customStatusBar';


const Register = () => {
    return(
        <Container>
            <CustomStatusBar statusBarColor='grey'/>
            <ImgContainer>
                <Image style={{height: 70, width: 270,}} source={require('../img/Netflix.png')}/>
            </ImgContainer>
            <TInputContainter>
                <StyledTextInput placeholder="Nom d'utilisateur" placeholderTextColor="#8F8F8F"/>
                <StyledTextInput placeholder="Adressse e-mail" placeholderTextColor="#8F8F8F"/>
                <StyledTextInput placeholder="Mot de passe" placeholderTextColor="#8F8F8F"/>
            </TInputContainter>
            <StyledButton butonTitle="Créer un compte" buttonType= "filled" goTo="Home"/>
            <StyledButton butonTitle="Se connecter" buttonType= "bordered" goTo="Login"/>
        </Container>
    );
}
export default Register;