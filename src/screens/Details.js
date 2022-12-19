import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import axios from 'axios';

const Details = ({route}) => {
  const [video, setVideo] = React.useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {},
      headers: {
        'X-RapidAPI-Key': '7bdc2ec1f4mshee98888228efd4fp1da953jsnd7fc01bdbb87',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    })
      .then(res => {
        console.log([res.data.d[0]]);
        setVideo([res.data.d[0]]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [route.params?.id]);

  return (
    <View>
      <Text>Details</Text>
      <Text>{video.l}</Text>
      <Image
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'black',
        }}
        source={{
          uri: video.imageUrl,
        }}
      />
    </View>
  );
};

export default Details;
