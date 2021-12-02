import React from 'react';
import { Text, View ,TouchableOpacity ,Image } from 'react-native';
import {styles} from '../Styles/style'



function PlusScreen ({navigation}) {

    return (
        <View style={styles.container}>

            <View style={styles.top}>

                <Text style={{...styles.topText,color:'#D6C11E'}}>Me </Text>

                <Text style={styles.topText}>Vegetarian </Text>
            </View>

            <View style={styles.underTop}>

                <Text style={styles.underTopText}>Choose special Vegetables for you </Text>

            </View>
            <Image source={require('../assets/photo/1.png')} style={styles.photo} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Menu')} title="sdfads"
            >
                <Text style={styles.customText}>Sing In</Text>

            </TouchableOpacity>

            <View style={styles.bot}>
                <Text style={styles.mainText}>Don`t have an account? </Text>
                <Text style={{...styles.mainText,color:'green'}}>
                    Register
                </Text>
            </View>
        </View>

    );

}



export default PlusScreen

