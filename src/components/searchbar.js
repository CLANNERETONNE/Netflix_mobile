import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const SearchBar = () => {
    return (
        <View>
            <StyledTextInput />
        </View>
    );
};

const StyledTextInput = styled.TextInput`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textPrimary};
    width: 90%;
    height: 48px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export default SearchBar;