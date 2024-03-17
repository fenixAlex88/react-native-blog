import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreeen';
import { PostScreen } from '../screens/PostScreen';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Post" component={PostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
