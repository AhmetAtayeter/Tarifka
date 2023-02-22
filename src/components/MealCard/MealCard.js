import React from "react";
import { View, Image, ImageBackground, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from './MealCard.style'

const MealCard = ({ category, onSelect }) => {

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onSelect} style={styles.button1}>
                <ImageBackground source={{ uri: category.strMealThumb }} style={styles.image} imageStyle={{borderRadius: 10}} >
                    <View style={styles.view1}>
                        <Text style = {styles.text1} numberOfLines={1}>{category.strMeal}</Text>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    )

}

export default MealCard