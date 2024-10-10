/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './src/service/routes';
import { LoginScreen } from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { PostScreen } from './src/screens/PostScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';
import { UserType } from './src/redux/types';


export type RootStackParamList = {
  LoginScreen: undefined;
  PostScreen: { user: UserType; color: string };
  HomeScreen: undefined; 
};

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={routes.LOGIN_SCREEN}
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={routes.POST_SCREEN} component={PostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
