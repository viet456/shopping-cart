import { useEffect, useState } from "react";

async function getRequestWithNativeFetch(url, signal = null) {
    const response = await fetch(url, { signal });
    if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
    }
    return response.json();
}

export function useFetchAllItems() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchItems = async () => {
            try {
                const shopItems = await getRequestWithNativeFetch(
                    'https://fakestoreapi.com/products',
                    controller.signal
                );
                setItems(shopItems);
                setError(null);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                    setItems(null);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchItems();

        return () => controller.abort();
    }, []);
    return { items, loading, error };
}