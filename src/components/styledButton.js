import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import { FilledButon, FilledButonText, BorderedButton, BorderedButonText } from './styled/styledButton.styled'; 


const StyledButton = ({butonTitle, buttonType, goTo}) => {

    const navigation = useNavigation();

    if (buttonType == "filled") {
        return (
            <FilledButon onPress={() => navigation.navigate(`${goTo}`)}>
                <FilledButonText>{butonTitle}</FilledButonText>
            </FilledButon>
        );
    } else if (buttonType == "bordered"){
        return (
            <BorderedButton onPress={() => navigation.navigate(`${goTo}`)}>
                <BorderedButonText>{butonTitle}</BorderedButonText>
            </BorderedButton>
        );
    } else {
        return (
            <FilledButon onPress={() => navigation.navigate(`${goTo}`)}>
                <FilledButonText>{butonTitle}</FilledButonText>
            </FilledButon>
        );
    };

};


export default StyledButton;