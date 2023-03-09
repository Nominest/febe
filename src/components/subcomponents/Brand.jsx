import { useContext } from "react";
import { ProductHomeContext } from "../contexts/ProductProvider";
import { navigate } from "navigate";
import "../../style/category.css";

export default function Brand() {
  const { productsHome } = useContext(ProductHomeContext);
  const brands = [...new Set(productsHome.map((product) => product.brand))];

  function handleBrandClick(brand) {
    navigate(`/products?brand=${brand}`);
  }

  return (
    <div className="nav">
      {brands.map((brand, i) => (
        <button key={i} onClick={() => handleBrandClick(brand)}>
          {brand}
          <img
            src={
              productsHome.filter((product) => product.brand === brand)[0]
                .imageUrl
            }
            alt={`${brand}-image`}
            width={150}
            height={150}
          />
        </button>
      ))}
    </div>
  );
}
