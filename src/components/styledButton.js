import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { FilledButon, BorderedButton } from './styledButton.styled'; 


const StyledButton = ({butonTitle, buttonType, goTo}) => {

    const navigation = useNavigation();

    if (buttonType == "filled") {
        return (
            <FilledButon title={butonTitle} onPress={() => navigation.navigate(`${goTo}`)}/>
        );
    } else if (buttonType == "bordered"){
        return (
            <BorderedButton title={butonTitle} onPress={() => navigation.navigate(`${goTo}`)}/>
        );
    } else {
        return (
            <FilledButon title={butonTitle} onPress={() => navigation.navigate(`${goTo}`)}/>
        );
    };

};


export default StyledButton;