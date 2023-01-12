import { StatusBar } from 'react-native';
import styled from 'styled-components';

const CustomStatusBar = ({transparent}) => {
    if (transparent == "true") {
        return (
            <StatusBar
                translucent
                backgroundColor="rgba(0, 0, 0, 0.20)"
                animated
            />
        );        
    } else if (transparent == "false") {
        return (
            <StatusBar backgroundColor="#202020"  />
        );
    } else {
        return (
            <StatusBar backgroundColor="#202020"  />
        );
    }
}

export default CustomStatusBar;