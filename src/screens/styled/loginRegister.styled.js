import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    background-color: ${props => props.theme.primary};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

//  ----- Image ----- //
export const ImgContainer = styled.View`
    height: 32%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 414;
    height: 126;
`;

//  ----- TextInput ----- //
export const TInputContainter = styled.View`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledTextInput = styled.TextInput`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textPrimary};
    width: 90%;
    height: 48px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`;