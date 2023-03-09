import { useContext, useState } from "react";
import { ProductHomeContext } from "../contexts/ProductProvider";
// import { navigate } from "navigate";
import "../../style/category.css";

export default function Category() {
  const { productsHome } = useContext(ProductHomeContext);
  const categories = [
    ...new Set(productsHome.map((product) => product.category)),
  ];

  function handleCategoryClick(category) {
    // navigate(`/category/${category}`);
  }

  return (
    <div className="nav">
      {categories.map((category, i) => (
        <button key={i} onClick={() => handleCategoryClick(category)}>
          {category}
          <img
            src={
              productsHome.filter((product) => product.category === category)[0]
                .imageUrl
            }
            alt={`${category}-image`}
            width={150}
            height={150}
          />
        </button>
      ))}
    </div>
  );
}
