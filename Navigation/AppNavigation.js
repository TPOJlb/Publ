import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpendScreen from "../screens/SpendScreen";
import SaveScreen from "../screens/SaveScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import MenuScreen from "../screens/MenuScreen";
import { Foundation ,FontAwesome5,AntDesign,SimpleLineIcons} from '@expo/vector-icons';



const TabNavigation = createBottomTabNavigator();

function AppNavigation (){

    return (


    <TabNavigation.Navigator screenOptions={{tabBarIcon: () => {},tabBarActiveTintColor: 'green',tabBarInactiveTintColor: 'black'}}
    >
        <TabNavigation.Screen name = 'SpendScreen' component = {SpendScreen} options={{headerShown: false,tabBarShowLabel:false,tabBarIcon: ({color}) => (
                <Foundation  name="home" size={20} color={color}/>
            ),}}/>
        <TabNavigation.Screen name="SaveScreen" component={SaveScreen}  options={{headerShown: false,tabBarShowLabel:false,tabBarIcon: ({ color}) => (
                <FontAwesome5 name="comment-dots" size={20} color={color} />
            ),}} />
        <TabNavigation.Screen name="ScheduleScreen" component={ScheduleScreen} options={{tabBarBadge:'',headerShown: false,tabBarShowLabel:false,tabBarIcon: ({ color}) => (
                <AntDesign name="shoppingcart" size={20} color={color} />
            ),}}/>
        <TabNavigation.Screen name = 'MenuScreen' component = {MenuScreen} options={{headerShown: false,tabBarShowLabel:false,tabBarIcon: ({ color}) =>
           (
                <SimpleLineIcons name="menu" size={20} color={color} />
            ),
        }}/>
    </TabNavigation.Navigator>

);
}


export default AppNavigation