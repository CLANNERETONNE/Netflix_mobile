import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

const CustomStatusBar = ({statusBarColor}) => {
    if (statusBarColor == "transparent") {
        return (
            <StatusBar
                translucent
                barStyle = "light-content"
                backgroundColor="rgba(0, 0, 0, 0.20)"
                animated
            />
        );        
    } else if (statusBarColor == "grey") {
        return (
            <StatusBarContainer>
                <StatusBar  backgroundColor="#202020" barStyle = "light-content" />
            </StatusBarContainer>
        );
    } else if (statusBarColor == "black") {
        return (
            <StatusBarContainer>
                <StatusBar backgroundColor="#000000" barStyle = "light-content" />
            </StatusBarContainer>
        );
    } else {
        return (
            <StatusBarContainer>
                <StatusBar backgroundColor="#202020" barStyle = "light-content" />
            </StatusBarContainer>
        );
    }
}

const StatusBarContainer = styled.View`
    width: 100%;
    height: 24px;
`;

export default CustomStatusBar;