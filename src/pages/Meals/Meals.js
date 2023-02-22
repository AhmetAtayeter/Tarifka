import React from "react";
import { View,Text } from "react-native";
import styles from './Meals.style'
import Config from "react-native-config";
import useFetch from "../../components/hooks/useFetch/useFetch";
import { FlatList } from "react-native-gesture-handler";
import MealCard from "../../components/MealCard/MealCard";

const Meals = ({route, navigation}) => {
    const {category} = route.params

    const { loading, data, error } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)

    const handleCategorySelect = detail => {
        navigation.navigate('DetailPage', {detail})
    }

    // console.log(JSON.stringify(data.meals.strMeal))
    const renderMeals = ({item}) => <MealCard category={item} onSelect={() => handleCategorySelect(item)} />
    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeals} />
        </View>
    )
}

export default Meals
