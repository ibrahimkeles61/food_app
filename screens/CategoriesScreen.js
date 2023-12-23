import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CaregoryGrid from "../components/CaregoryGrid";

export default function CategoriesScreen({ navigation }) {
	function renderCategoryItem(itemData) {
		function pressHandler() {
			navigation.navigate("FoodOverview", {
				categoryId: itemData.item.id,
			});
		}

		return (
			<CaregoryGrid
				title={itemData.item.title}
				color={itemData.item.color}
				pressFood={pressHandler}
			/>
		);
	}

	return (
		<View>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
				numColumns={2}
			/>
		</View>
	);
}

const styles = StyleSheet.create();
