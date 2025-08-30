import { createContext, useContext, useMemo } from "react";
import { useFetchAllItems } from "./useFetchAllItems";

const ItemContext = createContext();

export function ItemProvider({ children }) {
    const { items, loading, error } = useFetchAllItems();

    const value = useMemo(
        () => ({ items, loading, error}),
        [items, loading, error]
    );

    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    );
}

export function useItems() {
    return useContext(ItemContext);
}