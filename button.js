import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {styleSpendScreen} from './Styles/styleSpendScreen';


export default function ButtonFilter ({ActiveElement,setActiveElement}) {
    return(
    <View style={styleSpendScreen.topCategories}>
        <TouchableOpacity style = {ActiveElement === 'Corn' ?
            {...styleSpendScreen.topCategoriesText,width:55, height:30,...ActButton.ActiveButton}:
            {...styleSpendScreen.topCategoriesText,width:55, height:30,...ActButton.InActiveButton }}
                          onPress = {() => setActiveElement('Corn')}>
             <Text> </Text>
             <Image source={require('./assets/photo/corn.png')} style={{width:16,height:16}} />
            <Text> Corn</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {ActiveElement === 'Potato' ?
        {...styleSpendScreen.topCategoriesText,width:66, height:30,...ActButton.ActiveButton}:
        {...styleSpendScreen.topCategoriesText,width:66, height:30,...ActButton.InActiveButton }}
                         onPress = {() => setActiveElement('Potato')}>
             <Text> </Text>
             <Image source={require('./assets/photo/potato.png')} style={{width:16,height:16}} />
             <Text> Potato</Text>
       </TouchableOpacity>
        <TouchableOpacity style = {ActiveElement === 'Cabbage' ?
            {...styleSpendScreen.topCategoriesText,width:82, height:30,...ActButton.ActiveButton}:
            {...styleSpendScreen.topCategoriesText,width:82, height:30,...ActButton.InActiveButton }}
                          onPress = {() => setActiveElement('Cabbage')}>
             <Text> </Text>
            <Image source={require('./assets/photo/cabbage.png')} style={{width:16,height:16}} />
             <Text> Cabbage</Text>
        </TouchableOpacity>
    </View>
    );}

const ActButton = StyleSheet.create({
    ActiveButton: {
        borderRadius: 10,
        backgroundColor:'green',
        alignItems: 'center',
        flexDirection: 'row',
    },
    InActiveButton: {
        borderRadius: 10,
        backgroundColor:'#fff',
        alignItems: 'center',
        flexDirection: 'row',
    },
})