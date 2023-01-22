import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Image, View, ScrollView } from 'react-native';
import styled from 'styled-components';
import MovieList from '../components/movieList';
import Navbar from '../components/navbar';
import CustomStatusBar from '../components/customStatusBar';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CustomStatusBar statusBarColor='transparent'/>
      <Navbar/>
      <ScrollView>
        <RandomImg source={{ uri: `https://image.tmdb.org/t/p/w500//63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg` }}/>
        <ListContainer>
          <TitleList>Les plus populaires</TitleList>
          <MovieList filter='popular'/>
        </ListContainer>
        <ListContainer>
          <TitleList>Les mieux notés</TitleList>
          <MovieList  filter='top_rated'/>
        </ListContainer>
        <ListContainer>
          <TitleList>Nouveautés</TitleList>
          <MovieList  filter='upcoming'/>
        </ListContainer>
      </ScrollView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.primary};
  height: 100%;
  width: 100%;
`;
const RandomImg = styled.Image`
  width: 100%;
  height: 550px;
  object-fit: contain;
`;
const ListContainer = styled.SafeAreaView`
  margin: 10px;
  margin-bottom: 0px;
`;

const TitleList = styled.Text`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 7px;
`;

export default Home;