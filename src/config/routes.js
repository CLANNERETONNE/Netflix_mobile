import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/home';
import Details from '../screens/details';
import Search from '../screens/search';
import SearchResult from '../screens/searchResult';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;