import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator, Linking } from "react-native";
import styles from './Detail.style'
import useFetch from "../../components/hooks/useFetch/useFetch";
import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = ({ route }) => {

    const { detail } = route.params
    const { loading, data, error } = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + detail.idMeal)
    const [meal, setMeal] = useState()
    console.log(data.meals)
    // setMeal(data.meals[0])

    useEffect(() => {
        if (data.meals !== undefined) {
            setMeal(data.meals[0])
            console.log(meal)
        }
    }, [data])

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.view1}>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
            <Text style={styles.text1}>{meal.strMeal}</Text>
            <Text style={styles.text2}>{meal.strArea}</Text>
            <View style={{borderWidth: 1, borderColor: '#dedede', marginVertical: 5}}>

            </View>
            <Text style={styles.text3}>{meal.strInstructions}</Text>
            <TouchableOpacity 
            style={styles.button1}
            onPress={() => {
                Linking.openURL( meal.strYoutube );
          
                    }}
                  >
                <Text style={styles.text4}>Watch on Youtube</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Detail