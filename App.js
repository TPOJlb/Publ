import React,{useState} from 'react';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import PlusScreen from "./screens/PlusScreen";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigation from "./Navigation/AppNavigation";
import fonts from "./fonts.js";
import Filter from './filter';

const StackNavigator = createStackNavigator();

export default function App() {

    const [font,setFont] = useState(false);
    if(font) {

        return (
            <NavigationContainer>
                <StackNavigator.Navigator>

                    <StackNavigator.Screen
                        name="Login"
                        component={PlusScreen}
                        options={{headerShown: false}}
                    />
                    <StackNavigator.Screen
                        name="Menu"
                        component={AppNavigation}
                        options={{headerShown: false}}

                    />
                    <StackNavigator.Screen
                        name="Info"
                        component={Filter}
                        options={{headerShown: false}}
                    />
                </StackNavigator.Navigator>

            </NavigationContainer>
        );
    }else{
        return(

            <AppLoading  startAsync={fonts} onFinish={() => setFont(true)} onError={err => console.log(err)}/>

        );

    }
}




