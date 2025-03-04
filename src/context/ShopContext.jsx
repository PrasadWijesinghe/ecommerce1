import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error("Please select a size");
            return;
        }

        let cartData = JSON.parse(JSON.stringify(cartItems)); // Safe alternative to structuredClone

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }
        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = (itemId, size, quantity) => {
        let cartData = JSON.parse(JSON.stringify(cartItems));
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find(
                (product) => String(product._id) === String(items) // Ensure correct type comparison
            );
            if (!itemInfo) continue;

            for (const size in cartItems[items]) {
                if (cartItems[items][size] > 0) {
                    totalAmount += cartItems[items][size] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
