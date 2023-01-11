import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import MovieList from '../components/movieList';
import Navbar from '../components/navbar';

const Home = () => {

  const navigation = useNavigation();
  return (
    <Container>
      <Navbar></Navbar>
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
  margin-bottom: 0px;
`;

const TitleList = styled.Text`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 7px;
`;

export default Home;

//titlelist