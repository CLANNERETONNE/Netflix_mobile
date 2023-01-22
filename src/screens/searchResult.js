import React, { useEffect } from "react";
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import CustomStatusBar from "../components/customStatusBar";
import axios from 'axios';
import {API_KEY} from '@env';

const SearchResult = ({route}) => {
    console.log(route.params.text);

};

export default SearchResult
