import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: "favorites",
	initialState: {
		ids: [],
	},
	reducers: {
		addFavorites: (state, { payload }) => {
			state.ids.push(payload.id);
		},
		removeFavorites: (state, { payload }) => {
			state.ids.splice(state.ids.indexOf(payload.id), 1);
		},
	},
});

export default favoriteSlice.reducer;
export const { addFavorites, removeFavorites } = favoriteSlice.actions;
