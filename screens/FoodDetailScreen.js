import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	Pressable,
} from "react-native";
import { useLayoutEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
// import { FavoritesContext } from "../store/favoritescontext";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, removeFavorites } from "../store/redux/favorites";

export default function FoodDetailScreen({ route, navigation }) {
	const dispatch = useDispatch();
	// const favoriteFoodContext = useContext(FavoritesContext);
	const favoriteFoodIds = useSelector((state) => state.favoriteFoods.ids);

	const foodId = route.params.foodId;

	const selectedFood = FOODS.find((food) => food.id === foodId);

	// const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);

	const foodIsFavorite = favoriteFoodIds.includes(foodId);

	const changeFavorite = () =>
		foodIsFavorite
			? dispatch(removeFavorites({ id: foodId }))
			: dispatch(addFavorites({ id: foodId }));

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<Pressable style={({ pressed }) => pressed && styles.pressed}>
						<Ionicons
							name={foodIsFavorite ? "star" : "star-outline"}
							size={24}
							color="white"
							onPress={changeFavorite}
						/>
					</Pressable>
				);
			},
		});
	}, [navigation, changeFavorite]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image
				style={styles.image}
				source={{ uri: selectedFood.imageUrl }}
			/>
			<Text style={styles.title}>{selectedFood.title}</Text>
			<View style={styles.details}>
				<Text style={styles.detailItem}>{selectedFood.complexity}</Text>
				<Text style={styles.detailItem}>{selectedFood.affordability}</Text>
			</View>
			<View style={styles.listContainer}>
				<View style={styles.subTitleContainer}>
					<Text style={styles.subTitle}>İçindekiler</Text>
				</View>
				<FoodIngredients data={selectedFood.ingredients} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 50,
	},
	image: {
		width: "100%",
		height: 300,
	},
	title: {
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 5,
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 5,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
		color: "red",
	},
	listContainer: {
		width: "100%",
		paddingHorizontal: 10,
	},
	subTitleContainer: {
		alignItems: "center",
		borderBottomWidth: 2,
		borderBottomColor: "orange",
		marginVertical: 5,
	},
	subTitle: {
		color: "orange",
		fontSize: 24,
		fontWeight: "bold",
	},
	pressed: {
		opacity: 0.5,
	},
});
