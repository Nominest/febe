import { useState, useContext } from "react";
import { ProductHomeContext } from "../contexts/ProductProvider";

const perColumn = 4;

export default function LoadMore() {
  const { productsHome } = useContext(ProductHomeContext);
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [next, setNext] = useState(perColumn);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const response = await axios.get("http://localhost:2300/allproducts");
  //     setData(response.data);
  //   };
  //   fetchItems();
  // }, []);

  const handleDelete = (id) => {
    console.log("deleted", id);
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleNext = () => {
    setNext(next + perColumn);
  };

  return (
    <div className="allprod">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>
              Price{" "}
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
          {productsHome.slice(3, next).map((product) => (
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
              <td> {product.sale}</td>
              <td>
                Edit /{" "}
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
      {/* {next < data.length && <button onClick={handleNext}>Load More</button>} */}
      <button onClick={handleNext} className="loadmore">
        Load More
      </button>
    </div>
  );
}
