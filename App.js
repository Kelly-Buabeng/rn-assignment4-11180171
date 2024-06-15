import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import LoginPage from './pages/loginpage';

import HomePage from './pages/homepage';




const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginPage}/>

        <Stack.Screen name="Home" component={HomePage}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
