import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ProductHomeContext = createContext();

export function ProductProvider({ children }) {
  const [productsHome, setProductsHome] = useState([{}]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("http://localhost:2300/allproducts")
        .then((response) => setProductsHome(response.data))
        .catch(() => console.log("context"));
    };
    fetchProducts();
  }, []);

  return (
    <ProductHomeContext.Provider value={{ productsHome, setProductsHome }}>
      {children}
    </ProductHomeContext.Provider>
  );
}
