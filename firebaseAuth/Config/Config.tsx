import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../Screens/Products';
import SinglePro from '../Screens/SinglePro';
import Login from '../Screens/Login';
import SignUp from '../Screens/Signup';
import Task from '../Screens/Task';



const Stack = createNativeStackNavigator();

function Config() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown : false}} name="Signup" component={SignUp} />
      <Stack.Screen options={{headerShown : false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown : false}} name="Products" component={Products} />
        <Stack.Screen options={{headerShown : false}} name="SingleProduct" component={SinglePro} />
      <Stack.Screen options={{headerShown : false}} name="Task" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Config;