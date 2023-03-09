import { useContext, useEffect, useState } from "react";
import { ProductHomeContext } from "../contexts/ProductProvider";
import navigate from "navigate";
export default function Category() {
  const { productsHome } = useContext(ProductHomeContext);
  const [filtredData, setFiltredData] = useState(null);

  function filterData(dataType) {
    return productsHome.filter((type) => type.category === dataType);
  }
  useEffect(() => {
    setFiltredData(productsHome);
  }, []);

  function handlePokemon(e) {
    let typePokemon = e.target.value;
    typePokemon !== "all"
      ? setFiltredData(filterData(typePokemon))
      : setFiltredData(productsHome);
  }
  return (
    <div>
      {/* {" "}
      {productsHome.map((product, i) => (
        // <tr key={product.id}>
        <tr key={i}>
          <td>
            <img
              src={product.imageUrl}
              alt="imageall"
              width={150}
              height={150}
            />
          </td>

          <td> {product.category}</td>
        </tr>
      ))} */}
      <div className="nav">
        {filtredData ? (
          <div className="blog-container">
            {filtredData.map((productData, i) => (
              <div className="blog-post" key={i}>
                <p className="description">{productData.category}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
}
