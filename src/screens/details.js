import React, {useEffect} from 'react';
import { Image, StatusBar } from 'react-native';
import axios from 'axios';
import {API_KEY} from '@env';
import { Container, BottomContainer, TextTitle, TextInfo, ButtonContainer, FilledButton, FilledButtonText, BorderedButton, BorderedButtonText, TextDescription} from './styled/details.styled';
import CustomStatusBar from '../components/customStatusBar';

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
        <Container>
            <CustomStatusBar statusBarColor='black'/>
            <Image style={{width: 400, height: 200, backgroundColor: 'black',}} source={{uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,}}/>
            <BottomContainer>
                <TextTitle>{movie.title}</TextTitle>
                <TextInfo>{movie.release_date}</TextInfo>
                <ButtonContainer>
                    <FilledButton>
                        <FilledButtonText>Voir</FilledButtonText>
                    </FilledButton>
                    <BorderedButton>
                        <BorderedButtonText>Ma liste</BorderedButtonText>
                    </BorderedButton>
                </ButtonContainer>
                <TextDescription>{movie.overview}</TextDescription>
            </BottomContainer>
        </Container>
    );
};

export default Details;