
import { createContext, useState, ReactNode, FC } from "react";
import Swal from "sweetalert2";
import { Product } from "../types"; 

interface CartContextType {
  cartCount: number;
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "This product is already in your cart!",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      });
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: "Product has been added to your cart.",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <CartContext.Provider value={{ cartCount: cartItems.length, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
