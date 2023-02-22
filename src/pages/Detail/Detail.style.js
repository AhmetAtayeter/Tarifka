import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 20,
        marginBottom: 40
    },
    view1:{
        backgroundColor: '#f2f2f2'
    },
    image: {
        width: Dimensions.get('window').width - 20,
        // margin: 10,
        minHeight: 250,
        resizeMode: 'stretch',
        backgroundColor: '#f2f2f2'
        // borderRadius: 50
    },
    text1: {
        color: '#a5292a',
        marginHorizontal: 10,
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2'
    },
    text2: {
        color: '#a5292a',
        marginHorizontal: 10,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
    },
    text3: {
        fontSize: 16,
        marginHorizontal: 10
    },
    button1: {
        backgroundColor: '#ff0000',
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text4: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
})
