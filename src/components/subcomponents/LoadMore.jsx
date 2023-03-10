import { useState, useContext } from "react";
import { ProductHomeContext } from "../contexts/ProductProvider";
import axios from "axios";

const perLoad = 1;

export default function LoadMore() {
  const { productsHome, setProductsHome } = useContext(ProductHomeContext);
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [next, setNext] = useState(perLoad);

  const handleDelete = async (id) => {
    console.log("Delete", id);
    try {
      await axios.delete(`http://localhost:2300/products/${id}`);
      setData(data.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = () => {
    const sortedData = [...productsHome].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProductsHome(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleNext = () => {
    setNext(next + perLoad);
  };

  return (
    <div className="allprod">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>
              Price
              <span onClick={handleSort}>
                {sortOrder === "asc" ? "▲" : "▼"}
              </span>
            </th>
            <th>Brand</th>
            <th>Category</th>
            <th>Sale</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {productsHome.slice(0, next).map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.imageUrl}
                  alt="imageall"
                  width={50}
                  height={50}
                />
              </td>
              <td> {product.name}</td>
              <td> {product.price + "$"}</td>
              <td> {product.brand}</td>
              <td> {product.category}</td>
              <td>{product.sale > 0 ? product.sale + "%" : console.log("")}</td>
              <td>
                Edit /
                <span
                  onClick={() => handleDelete(product.id)}
                  className="delete"
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {next < productsHome.length ? (
        <button onClick={handleNext} className="loadmore">
          Load More
        </button>
      ) : (
        <button onClick={() => setNext(perLoad)} className="loadmore">
          Load Less
        </button>
      )}
    </div>
  );
}
{
  /* {next < data.length && <button onClick={handleNext}>Load More</button>} */
}
// useEffect(() => {
//   const fetchItems = async () => {
//     const response = await axios.get("http://localhost:2300/allproducts");
//     setData(response.data);
//   };
//   fetchItems();
// }, []);
