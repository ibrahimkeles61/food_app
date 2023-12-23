import { StyleSheet, Text, View, FlatList } from "react-native";
import FoodItem from "./FoodItem";

function renderFoodItem(itemData) {
	return <FoodItem {...itemData.item} />;
}

export default function FoodList({ items }) {
	return (
		<View>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderFoodItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
