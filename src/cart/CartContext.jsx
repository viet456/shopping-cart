import { createContext, useContext, useReducer, useMemo } from "react";

const CartContext = createContext();
const initialState = {
    cartItems: [],
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const { item, quantity } = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                const updatedCartItems = state.cartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
                return { ...state, cartItems: updatedCartItems };
            } else {
                const newItem = { ...item, quantity };
                return { ...state, cartItems: [...state.cartItems, newItem] };
            }
        }
        case 'REMOVE_ITEM': {
            const updatedCartItems = state.cartItems.filter(
                item => item.id !== action.payload.id
            );
            return { ...state, cartItems: updatedCartItems };
        }
        case 'UPDATE_QUANTITY': {
            const { id, quantity } = action.payload;
            const updatedCartItems = state.cartItems.map(item => item.id === id
                ? { ...item, quantity: quantity }
                : item
            ).filter(item => item.quantity > 0);
            return { ...state, cartItems: updatedCartItems };
        }
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item, quantity) => {
        dispatch({ type: 'ADD_ITEM', payload: { item, quantity } });
    };

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    };
    const updateQuantity = (id, quantity) => {
        const numQuantity = Math.max(0, Number(quantity));
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: numQuantity } });
    };
    const value = useMemo(
        () => ({
            cartItems: state.cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
        }),
        [state.cartItems]
    );

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}

export function useCart() {
    return useContext(CartContext);
}