import React, {useState} from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity,TextInput} from 'react-native';
import {styleSpendScreen} from '../Styles/styleSpendScreen'
import {Entypo, Ionicons} from '@expo/vector-icons';
import ButtonFilter from '../button'
import {AntDesign} from '@expo/vector-icons';
import {FoodCategory} from "../base";
import { FontAwesome } from '@expo/vector-icons';

const SpendScreen = ({navigation}) => {

    const [ActiveElement, setActiveElement] = useState('Corn');
    return (
        <View style={styleSpendScreen.container}>

            <View style={styleSpendScreen.top}>
                <View style={styleSpendScreen.inTop}>
                    <View style={styleSpendScreen.topCountry}>
                        <Text>
                            <Text> </Text>
                            <Ionicons name="location" size={16} color="green"/>
                            <Text> Malang,Indonesia </Text>
                            <AntDesign name="down" size={10} color="orange"/>
                        </Text>
                    </View>
                    <View style={styleSpendScreen.topVegetables}>
                        <Text style={{...styleSpendScreen.topVegetablesText, color: 'orange'}}>Find</Text>
                        <Text style={{...styleSpendScreen.topVegetablesText, color: 'green'}}> Fresh Vegetables</Text>
                    </View>
                </View>
                <View style={styleSpendScreen.topIcon}>
                    <Image style={{width:50,height:50}} source={require('../assets/photo/png-clipart-icon-vampire-symbol-vampire-logo-fictional-character.png')} />
                </View>
            </View>
            <View style={styleSpendScreen.topSearch}>
                <TouchableOpacity style={{marginTop:2,paddingLeft:10}}>

                    <TextInput  >
                        <FontAwesome name="search" size={20} color="black" />
                        <Text style={{fontFamily:'RobotoLight',fontSize:12,marginRight:40}}>  Search Vegetables</Text>
                    </TextInput>
                </TouchableOpacity>
            </View>
            <View style={styleSpendScreen.topTextCategories}>
                <Text style={{fontFamily:'RobotoBold',paddingTop:10,fontSize:20}}>Categories</Text>
            </View>
            <ButtonFilter ActiveElement={ActiveElement} setActiveElement={setActiveElement}/>
            <View style={styleSpendScreen.mainText}>
                <Text style={{fontFamily:'RobotoBold',paddingTop:10,fontSize:20}}>Fresh Product</Text>
                <Text style={{color:'green',fontFamily:'RobotoBold',paddingTop:15.9,fontSize:15}}>                                                    See All</Text>
            </View>
            <ScrollView style={styleSpendScreen.mainProduct}>{

                FoodCategory.map(item => {
                    if (ActiveElement === item.category) {
                        const ItemKey = item.key;
                        return (
                            <TouchableOpacity key={item.key} style={{
                                paddingLeft: 10,
                                width: '100%',
                                height: 100,
                                paddingBottom: 30,
                                marginTop: 4,
                                paddingTop: 10,
                                borderRadius: 20,
                                flexDirection: 'row'
                            }} onPress={() => navigation.navigate('Info', {ItemKey})}>
                                <Image source={item.image} style={{width: '20%', height: 80}}/>
                                <View style={{flex:1}}>
                                <View style={{flex:1,flexDirection:"row"}}>
                                    <View style={{flex:1}}>
                                    <Text style={{fontSize:16}}> {item.name}</Text>
                                    <Text style={{fontFamily:'RobotoExtraBold',color:'green',fontSize:20}}>{item.price}</Text>
                                        <View style={{flexDirection:'row'}}>
                                        <Text> </Text>
                                        <AntDesign style={{paddingTop:15}} name="star" size={13} color="orange"/>
                                        <Text style={{fontFamily:'RobotoExtraBold',color:'green',fontSize:10,paddingTop:15}}> {item.stars}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection:'row'}}>


                                    </View>


                                    </View>

                                </View>
                                <View style={{flexDirection:'row',marginTop:20,backgroundColor:'green',borderWidth: 1,borderRadius: 5,borderColor: 'green'}}>
                                    <TouchableOpacity style={{padding: 3,height:36}}>
                                        <Entypo name="shopping-cart" size={30} color="#fff" />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                })

            }
            </ScrollView>
            <View style={styleSpendScreen.bottomText}>
                <Text style={{fontFamily:'RobotoBold',paddingTop:10,fontSize:20}}>Nearby Product</Text>
                <Text style={{color:'green',fontFamily:'RobotoBold',paddingTop:15.9,fontSize:15}}>                                               See All</Text>
            </View>
            <ScrollView horizontal={true} style={styleSpendScreen.bottomPhoto}>{
                FoodCategory.map(item => {
                    if (item) {
                        const ItemKey = item.key;
                        return (
                            <TouchableOpacity style={{padding:10}} key={item.key} onPress={() => navigation.navigate('Info', {ItemKey})}>
                                <Image source={item.image} style={{width: 90, height: 80}}/>
                            </TouchableOpacity>
                        )
                    }
                })
            }

            </ScrollView>
        </View>

    );
}

export default SpendScreen

