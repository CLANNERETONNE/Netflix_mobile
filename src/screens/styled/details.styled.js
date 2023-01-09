import styled from "styled-components";

export const Container = styled.View`
background-color: ${props => props.theme.primary};
width: 100%;
height: 100%;
display: flex;
align-items: center;
`;

export const BottomContainer = styled.View`
width: 90%;
margin-top: 10px;
`;

export const TextTitle = styled.Text`
color: ${props => props.theme.textPrimary};
font-size: 25px;
margin-top: 8px;
margin-bottom: 4px;
`;

export const TextInfo = styled.Text`
color: ${props => props.theme.textPrimary};
font-size: 12px;
`;

export const ButtonContainer = styled.View`
margin-top: 20px;
margin-bottom: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const FilledButton = styled.TouchableOpacity`
background-color: ${props => props.theme.tertiary};
width: 48%;
height: 48px;
border-radius: 12px;
justify-content: center;
align-items: center;
`;

export const FilledButtonText = styled.Text`
color: ${props => props.theme.primary};
font-size: 20px;
`;

export const BorderedButton = styled.TouchableOpacity`
border: 3.5px solid ${props => props.theme.tertiary};
width: 48%;
height: 48px;
border-radius: 12px;
justify-content: center;
align-items: center;
`;

export const BorderedButtonText = styled.Text`
color: ${props => props.theme.tertiary};
font-size: 20px;
`;

export const TextDescription = styled.Text`
color: ${props => props.theme.textPrimary};
font-size: 15px;
`;