import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, Image, Button, View, ScrollView} from 'react-native';
import axios from 'axios';
import {API_KEY} from '@env';

const Search = ({}) => {
    const [movie, setMovie] = React.useState({});
    
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: API_KEY,
                query: input,
                language: 'fr',
            },
        })
        .then(res => {
            setMovie(res.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, []);

    return (
        <Container>
            <StyledTextInput placeholder="rechercher" placeholderTextColor="#8F8F8F"/>
            <FlatList 
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
            />
        </Container>
    );
};

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.primary};
  height: 100%;
  width: 100%;
`;

const StyledTextInput = styled.TextInput`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textPrimary};
    width: 90%;
    height: 48px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export default Search;