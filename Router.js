import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./src/pages/Categories/Categories";
import Meals from "./src/pages/Meals/Meals"
import Detail from "./src/pages/Detail/Detail";

const Router = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitleStyle: { color: '#ffa500', fontSize: 30, fontWeight: 'bold' }
          }} />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            title: 'Meals',
            headerTitleStyle: { color: '#ffa500', fontSize: 30, fontWeight: 'bold' }
          }} />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleStyle: { color: '#ffa500', fontSize: 30, fontWeight: 'bold' }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;