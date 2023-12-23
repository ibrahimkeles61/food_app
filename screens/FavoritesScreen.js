import { StyleSheet, Text, View } from "react-native";
import FoodList from "../components/FoodList";
import { FavoritesContext } from "../store/favoritescontext";
// import { useContext } from "react";
import { useSelector } from "react-redux";
import { FOODS } from "../data/dummy-data";

export default function FavoritesScreen() {
	// const favoriteFoodContext = useContext(FavoritesContext);
	const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);

	const favoriteFoods = FOODS.filter((food) =>
		favoriteFoodsIds.includes(food.id)
	);

	return favoriteFoods.length > 0 ? (
		<FoodList items={favoriteFoods} />
	) : (
		<View style={styles.container}>
			<Text style={styles.text}>Favorilere Bir Şey Eklenmedi</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
