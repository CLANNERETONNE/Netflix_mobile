import styled from "styled-components";

export const FilledButon = styled.TouchableOpacity`
    width: 90%;
    height: 48px;
    border-radius: 10px;
    background-color: ${props => props.theme.tertiary};
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    `;

export const FilledButonText = styled.Text`
    color: ${props => props.theme.textTertiary};
`;

export const BorderedButton = styled.TouchableOpacity`
    width: 90%;
    height: 48px;
    border-radius: 10px;
    border: 4px solid ${props => props.theme.tertiary};
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;
export const BorderedButonText = styled.Text`
    color: ${props => props.theme.textPrimary};
`;