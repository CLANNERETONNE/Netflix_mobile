import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
// import {API_KEY} from '@env';
import axios from 'axios';

const Home = () => {
  //const API_KEY = 'AIzaSyB9M1E7bfBj3oLcLly7HHOQ8zh0-50Xnkw'; //AWS API_KEY
  //const API_KEY = '4784df1647mshe43daaece94ab39p1fc107jsnc4f2a98a7d75'; //Rapid API API_KEY
  const API_KEY = '7bdc2ec1f4mshee98888228efd4fp1da953jsnd7fc01bdbb87';

  const [video, setVideo] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const offset = 20;

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {
        q: 'game',
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    })
      .then(res => {
        console.log(res.data.d);
        setVideo([...video, ...res.data.d]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <Image
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
          }}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
          }}
        />
        <Text>{item.l}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <FlatList
        data={video}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => {
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.4}
      />
    </SafeAreaView>
  );
};

export default Home;