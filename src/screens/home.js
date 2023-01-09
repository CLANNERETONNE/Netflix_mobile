import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_KEY} from '@env';
import Card from '../components/card';
import styled from 'styled-components';

const Home = () => {
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
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
    <Container>
      <ListContainer>
        <TitleList>Populaire en ce moment</TitleList>
        <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
        />
      </ListContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.primary};
  height: 100%;
  width: 100%;
`;
const ListContainer = styled.SafeAreaView`
  margin: 10px;
`;

const TitleList = styled.Text`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 7px;
`;

export default Home;

//titlelist