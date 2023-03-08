import axios from "axios";
import { useEffect, useState } from "react";
import "../../style/allproducts.css";

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get("http://localhost:2300/allproducts");
      setData(response.data);
    };
    fetchItems();
  }, []);

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
          {data.map((product) => (
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
                <span onClick={() => handleDelete(product.id)}>Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
