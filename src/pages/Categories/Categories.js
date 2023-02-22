import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import styles from './Categories.style'
import Config from "react-native-config";
import useFetch from "../../components/hooks/useFetch/useFetch"
import CategoryCard from "../../components/CategoryCard";

const Categories = ({navigation}) => {

    const { loading, data, error } = useFetch(Config.API_URL)

    const handleCategorySelect = category => {
        navigation.navigate('MealsPage', {category})
    }

    const renderCategory = ({item}) => <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />
    
    return(
        <View style={styles.container}>
            <FlatList 
                data={data.categories} 
                renderItem={renderCategory}/>
        </View>
    )

}

export default Categories