import React from 'react';
import { Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Register = ({navigation}) => {
    return(
        <SafeAreaView>
            <Text>Register</Text>
            <TextInput placeholder="Nom d'utilisateur" />
            <TextInput placeholder="Adressse e-mail" />
            <TextInput placeholder="Mot de passe" />
            <Button
                title="Créer un compte"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Se connecter"
                onPress={() => navigation.navigate('Login')}
            />
        </SafeAreaView>
    );
}
export default Register;