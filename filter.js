import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {FoodCategory} from "./base";
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Filter = ({route, navigation}) => {

    const [counter, setCounter] = useState(1);
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>{

            FoodCategory.map(item => {
                if (route.params.ItemKey === item.key) {

                    return (
                        <View key={item.key} style={{flex: 6, backgroundColor: '#fff'}}>

                            <Image style={{flex: 2,width: '100%', height: '40%'}} source={item.image}/>
                            <View style={{paddingTop: 20, paddingLeft: 20}}>
                                <Text style={{fontSize: 20, fontFamily: 'RobotoExtraBold'}}>Sweet Corn</Text>
                            </View>
                            <TouchableOpacity style={{position: 'absolute' ,top:30,left:10}}  onPress={() => navigation.navigate('Menu')}>
                                <Ionicons name="chevron-back-circle-outline" size={50} color="black" />
                            </TouchableOpacity>
                            <View style={{
                                width: '95%',
                                flex: 1,
                                paddingLeft: 20,
                            }}>

                                <View style={{
                                    flexDirection: 'row', paddingTop: 5,
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'RobotoExtraBold'
                                    }}> {item.price}</Text>
                                    <Text style={{
                                        fontSize: 10,
                                        fontFamily: 'RobotoLight',
                                        paddingTop: 10,
                                    }}> ({item.weight})</Text>
                                    <View style={{flex: 1}}>
                                        <View style={{
                                            flexDirection: 'row',
                                            height: 30,
                                            justifyContent: 'flex-end',
                                            paddingRight: 20
                                        }}>
                                            <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}
                                                              style={{paddingTop: 2}}>
                                                <AntDesign name="plussquare" size={24} color="green"/>
                                            </TouchableOpacity>
                                            <Text
                                                style={{fontSize: 20, fontFamily: "RobotoExtraBold"}}> {counter} </Text>
                                            <TouchableOpacity onPress={() => setCounter(prev => prev - 1)}
                                                              style={{paddingTop: 2}}>
                                                <AntDesign name="minussquare" size={24} color="green"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row', paddingTop: 5,
                                }}>
                                    <AntDesign name="star" size={13} color="orange"/>
                                    <Text style={{fontSize: 10}}>{item.stars}</Text>
                                </View>
                                <Text style={{
                                    paddingTop: 5,
                                    fontSize: 13,
                                    fontFamily: 'RobotoRegular'
                                }}>{item.reviews.comment}</Text>
                            </View>
                            <View style={{flex: 0.3}}>
                                <Text style={{
                                    paddingTop: 15,
                                    paddingLeft: 20,
                                    fontSize: 16,
                                    fontFamily: 'RobotoExtraBold'
                                }}>Revies</Text>
                            </View>
                            <View style={{flex: 1.7, paddingTop: 5}}>
                                <View style={{flexDirection: 'row'}}>
                                    <FontAwesome5 style={{paddingLeft: 20}} name="portrait" size={50} color="black"/>
                                    <View style={{flexDirection: 'column'}}>

                                        <Text style={{
                                            paddingLeft: 10,
                                            fontSize: 18,
                                            fontFamily: 'RobotoMedium'
                                        }}>{item.reviews.person}</Text>
                                        <View style={{flex: 1, flexDirection: 'row', paddingTop: 10, paddingLeft: 10}}>
                                            <AntDesign name="star" size={13} color="orange"/>
                                            <Text style={{fontSize: 10}}> {item.stars}</Text>
                                            <Text
                                                style={{fontSize: 12}}>                                                           {item.reviews.date}</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={{flex: 1.3, flexDirection: 'row', paddingLeft: 20}}>
                                    <View style={{flex: 1.3, flexDirection: 'column',}}>
                                        <Text>{item.reviews.comment}</Text>
                                         <View style={{paddingTop:10,flex: 1.3, flexDirection: 'row'}}>
                                             <TouchableOpacity style={{padding: 3,borderWidth: 1,height:62,borderRadius: 10,borderColor: 'green'}}>
                                                 <Entypo name="shopping-cart" size={50} color="green" />
                                             </TouchableOpacity>
                                             <View style={{marginLeft: 30,marginBottom: 10, paddingLeft: 270,backgroundColor: 'green',borderRadius:10}}>
                                             <TouchableOpacity style={{padding: 3,borderWidth: 1,height:62,borderRadius: 20,borderColor: 'green'}}>
                                                 <Text style={{position: 'absolute',top:15,right:85,fontSize:22,fontFamily:'RobotoExtraBold'}}>Checkout</Text>
                                             </TouchableOpacity>
                                             </View>
                                         </View>
                                    </View>
                                </View>
                            </View>

                        </View>

                    )
                }
            })

        }
        </View>
    );
}

export default Filter