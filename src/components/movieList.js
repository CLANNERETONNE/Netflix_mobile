import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_KEY} from '@env';
import Card from '../components/card';

const MovieList = ({request}) => {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular`, {
          params: {
            api_key: API_KEY,
            language: 'fr',
          },
        })
        .then(res => {
          setMovies([...movies, ...res.data.results]);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    const renderItem = ({ item }) => {
      return (
          <TouchableOpacity  onPress={() => {navigation.navigate('Details', {id: item.id});}}>
              <Card imageSource={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/>
          </TouchableOpacity>
      );
    };
  
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
            />
        </View>
    );
};

export default MovieList;