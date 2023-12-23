import { StyleSheet, Text, View, FlatList } from "react-native";
import { FOODS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import FoodList from "../components/FoodList";

export default function FoodOverviewScreen({ route, navigation }) {
	const categoryId = route.params.categoryId;

	const displayedFoods = FOODS.filter((foodItem) => {
		return foodItem.categoryIds.indexOf(categoryId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === categoryId
		).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [navigation, categoryId]);

	return <FoodList items={displayedFoods} />;
}

const styles = StyleSheet.create({});
