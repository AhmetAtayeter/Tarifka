import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from './CategoryCard.style'
import Meals from "../../pages/Meals/Meals";

const CategoryCard = ({ category, onSelect }) => {
    // console.log(category)

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback 
            style={styles.view1}
            onPress={onSelect}
            >
                <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
                <Text style={styles.text1}>{category.strCategory}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default CategoryCard