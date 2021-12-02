import {StyleSheet} from "react-native";

export const styleSpendScreen = StyleSheet.create({
    container: {
        flex: 12,
        marginLeft:10,
        marginRight:10
    },
    top: {
        flex: 2,
        flexDirection: 'row',
    },
    inTop : {
        flex: 2,
        flexDirection: 'column',
    },
    topCountry: {
        flex: 2,
        justifyContent: "center",
        fontFamily:'RobotoExtraBold',
        paddingTop: 20,
    },
    topVegetablesText:{
        fontSize: 25,
        fontFamily:'RobotoMedium',
    },
    topVegetables: {
        flex: 2,

        flexDirection: 'row',
        alignItems: 'center'
    },
    topIcon: {
        flex: 1,
        paddingTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    topSearch: {
        flex: 0.7,
        marginTop: 5,
        marginBottom: 5,
        borderWidth:0.7,
        borderRadius:10,
        borderColor: 'gray',
    },
    topTextCategories: {
        flex: 1,
        fontFamily:'RobotoLight',
        fontSize:40,
    },
    topCategories: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    topCategoriesText: {
        borderRadius: 10,
        backgroundColor:'#fff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    mainText:{
        flex: 1,
        flexDirection: 'row',
    },
    mainProduct: {
        backgroundColor:'#fff',
        height: 180,
        width: '100%',
        padding: 10,
    },
    bottomText: {
        flex: 1,
        flexDirection: 'row',
    },
    bottomPhoto: {
        height: 50,
    },

})