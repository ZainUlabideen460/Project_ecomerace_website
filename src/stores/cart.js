import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [],
    statusTab: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }else{
                state.items.push({productId, quantity});
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            }else{
                state.items = (state.items).filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state){
            if(state.statusTab === false){
                state.statusTab = true;
            }else{
                state.statusTab = false;
            }
        },
       
        addToFavorites(state, action) {
            const { productId } = action.payload;
            if (!state.favorites.includes(productId)) {
                state.favorites.push(productId);
                localStorage.setItem("favorites", JSON.stringify(state.favorites));
            }
        },
        removeFromFavorites(state, action) {
            const { productId } = action.payload;
            state.favorites = state.favorites.filter(id => id !== productId);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        toggleFavorite(state, action) {
            const itemId = action.payload;
            if (state.favorites.includes(itemId)) {
                state.favorites = state.favorites.filter(item => item !== itemId);
            } else {
                state.favorites.push(itemId);
            }
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
    }
})
export const { addToCart, changeQuantity, toggleStatusTab,addToFavorites,removeFromFavorites,toggleFavorite } = cartSlice.actions;
export default cartSlice.reducer;