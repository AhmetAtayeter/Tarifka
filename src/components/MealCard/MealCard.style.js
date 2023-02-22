import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa500',
        flexDirection: 'row',
        paddingBottom: 10
    },
    image: {
        width: Dimensions.get('window').width - 20,
        minHeight: 200,
        resizeMode: 'stretch',
        backgroundColor: '#eceff1',
        margin: 10,
        borderRadius: 10,
    },
    button1: {
        borderRadius: 10,
        flex: 1
    },
    view1: {
        backgroundColor : 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 164,
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    text1: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'right',
        
    }
})