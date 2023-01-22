import React from "react";
import {useNavigation} from '@react-navigation/native';
import styled from "styled-components";
import { Button, TouchableOpacity } from "react-native";

const SearchHeader = ({ }) => {
    const navigation = useNavigation();
    const [input, setInput] = React.useState('');

    return (
        <Container>
            <LogoContainer onPress={() => navigation.navigate(`Home`)}>
                <Logo source={require('../img/previous.png')}/>
            </LogoContainer>
            <StyledTextInput placeholder="rechercher"  placeholderTextColor="#8F8F8F" value={input} onChangeText={text => setInput(text)}/>
            <SearchButton onPress={() => { navigation.navigate('Search', { text: input })}}/>
        </Container>
    );
};

const Container = styled.View`
    width: 93%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.TouchableOpacity`
    width: 10%;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

const SearchButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background-color: white;
`;

const Logo = styled.Image`
    height: 15px;
    width: 15px;
`;

const StyledTextInput = styled.TextInput`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textPrimary};
    width: 85%;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
`;

export default SearchHeader;