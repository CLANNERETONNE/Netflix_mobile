import React, {useEffect} from 'react';
import {FlatList, TextInput, SafeAreaView, Text, TouchableOpacity, Image, Button, View, ScrollView} from 'react-native';
import CustomStatusBar from '../components/customStatusBar';
import SearchHeader from '../components/searchHeader';
import {useNavigation} from '@react-navigation/native';
import MovieList from '../components/movieList';
import axios from 'axios';
import styled from 'styled-components';
import {API_KEY} from '@env';

const Search = ({route}) => {
    const navigation = useNavigation();
    const [movie, setMovie] = React.useState({});
    
    
    useEffect(() =>{
        if(route.params != undefined) {
            axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: API_KEY,
                    query: route.params.text,
                    language: 'fr',
                },
            })
            .then(res => {
                setMovie(res.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
            
    }, []);
    
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity  onPress={() => {navigation.navigate('Details', {id: item.id});}}>
                <Card source={{uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}`}}/>
            </TouchableOpacity>
        );
    };
    
    if (route.params != undefined) {
        console.log(route.params);
        return (
            <Container>
                <CustomStatusBar statusBarColor='black'/>
                <SearchHeader />
                <FlatList
                    data={movie}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
            </Container>
        );
    } else {
        console.log("KO");
        return (
            <Container>
                <CustomStatusBar statusBarColor='black'/>
                <SearchHeader />
            </Container>
        );
    }

};

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.primary};
  height: 100%;
  width: 100%;
  align-items: center;
`;

const TitleList = styled.Text`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 7px;
`;
const Card = styled.Image`
    border-radius: 10px;
    height: 150px;
    width: 100px;
    margin: 5px;
    background-color: black;
`;


export default Search;

//resultat search page a part, mettreles plusvue etc