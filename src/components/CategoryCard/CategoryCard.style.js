import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa500',
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: '#eceff1',
        borderRadius: 50
    },
    view1: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#eceff1',
        margin: 5,
        borderWidth: 1,
        borderRadius: 50,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#bcaaa4',
        alignItems :'center',
        width: Dimensions.get('window').width - 30
    },
    text1: {
        marginLeft: 10,
        fontSize: 24
    }
})