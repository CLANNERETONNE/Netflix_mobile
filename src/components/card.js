import React from 'react';
import {Image} from 'react-native';

const Card = ({imageSource}) => {
    const imageOption = {uri: imageSource,};

    return (
        <Image style={{height: 100, width: 100, backgroundColor: 'black',}} source={imageOption}/>
    );
};

export default Card;