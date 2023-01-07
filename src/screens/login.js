import React from 'react';
import { Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Login = ({navigation}) => {
    return(
        <SafeAreaView>
            <Text>Login</Text>
            <TextInput placeholder="Adressse e-mail" />
            <TextInput placeholder="Mot de passe" />
            <Button
                title="Se connecter"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Créer un compte"
                onPress={() => navigation.navigate('Register')}
            />
        </SafeAreaView>
    );
}
export default Login;