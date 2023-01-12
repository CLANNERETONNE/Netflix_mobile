import React from 'react';
import { Cardstyled } from './styled/card.styled';

const Card = ({imageSource}) => {
    const imageOption = {uri: imageSource,};

    return (
        <Cardstyled source={imageOption}/>
    );
};

export default Card;