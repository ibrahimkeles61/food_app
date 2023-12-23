import { useState, createContext } from "react";

export const FavoritesContext = createContext({
	ids: [],
	addFavorites: (id) => {},
	removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
	const [favoriteFoodIds, setFavoriteFoodIds] = useState([]);

	function addFavorites(id) {
		setFavoriteFoodIds((current) => [...current, id]);
	}

	function removeFavorites(id) {
		setFavoriteFoodIds((current) => current.filter((foodId) => foodId !== id));
	}

	const value = {
		ids: favoriteFoodIds,
		addFavorites,
		removeFavorites,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContextProvider;
