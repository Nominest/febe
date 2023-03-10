import { useContext, useState } from "react";
import "../../style/allproducts.css";
import { ProductHomeContext } from "../contexts/ProductProvider";
import axios from "axios";
export default function AllProducts() {
  const { productsHome, setProductsHome } = useContext(ProductHomeContext);
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

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
          {productsHome.map((product, i) => (
            // <tr key={product.id}>
            <tr key={i}>
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
    </div>
  );
}
// useEffect(() => {
//   const fetchItems = async () => {
//     const response = await axios.get("http://localhost:2300/allproducts");
//     setData(response.data);
//   };
//   fetchItems();
// }, []);
// const handleSort = () => {
//   const sortedData = [...data].sort((a, b) => {
//     if (sortOrder === "asc") {
//       return a.price - b.price;
//     } else {
//       return b.price - a.price;
//     }
//   });
//   setData(sortedData);
//   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
// };
