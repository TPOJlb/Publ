import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 24,

    },
    photo: {
        flex: 15,

        width: 380,



    },
    bot: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',


    },
    top: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 20,


    },
    underTop:{

        flex: 1 ,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        paddingBottom: 50,

    },
    button: {
        flex: 3,

        margin: 10,
        borderRadius: 15,
        backgroundColor: '#14BA43',
        justifyContent: "center",
        alignItems: 'center',
    },

    customText:{


        fontSize: 20,
        color: "#fff",

        fontFamily:'RobotoExtraBold',


    },

    mainText: {

        color: 'black',
        fontFamily: 'RobotoLight',
        fontSize: 14,

    },

    topText: {
        color: '#14BA43',
        fontFamily: 'BeVietnamLight',
        fontSize: 30,
        textAlignVertical : 'bottom',

    },

    underTopText: {
        color: '#BEBBBF',
        fontFamily: 'RobotoSemiBold',
        fontSize: 15,

    },
})
