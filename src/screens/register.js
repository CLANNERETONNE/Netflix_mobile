import React from 'react';
import { Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StyledButton from '../components/styledButton';


const Register = () => {
    return(
        <SafeAreaView>
            <Text>NETFLIX</Text>
            <TextInput placeholder="Nom d'utilisateur" />
            <TextInput placeholder="Adressse e-mail" />
            <TextInput placeholder="Mot de passe" />
            <StyledButton butonTitle="Créer un compte" buttonType= "filled" goTo="Home"/>
            <StyledButton butonTitle="Se connecter" buttonType= "bordered" goTo="Login"/>
        </SafeAreaView>
    );
}
export default Register;