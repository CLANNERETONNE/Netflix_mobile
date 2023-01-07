import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView} from 'react-native';
import axios from 'axios';
import {API_KEY} from '@env';

const Details = ({route}) => {
    const [movie, setMovie] = React.useState({});
    
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}`, {
            params: {
                api_key: API_KEY,
                language: 'fr',
            },
        })
        .then(res => {
            setMovie(res.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, [route.params.id]);

    return (
        <View>
            <Image style={{width: 400, height: 200, backgroundColor: 'black',}} source={{uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,}}/>
            <Text>{movie.title}</Text>
            <Text>{movie.release_date}</Text>
            <Text>{movie.overview}</Text>
        </View>
    );
};

export default Details;