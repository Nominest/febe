import { useState, useContext } from "react";
import { ProductHomeContext } from "../contexts/ProductProvider";
import { v4 as uuid } from "uuid";
export default function Add() {
  const { productsHome, setProductsHome } = useContext(ProductHomeContext);
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [sale, setSale] = useState("");

  const handleAddProduct = () => {
    const newProduct = {
      id: small_id,
      name,
      price,
      imageUrl,
      category,
      brand,
      sale,
    };
    setProductsHome([...productsHome, newProduct]);
    setName("");
    setPrice("");
    setImageUrl("");
    setCategory("");
    setBrand("");
    setSale("");
    console.log("addwed", small_id);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            {productsHome.map((product, i) => (
              <option key={i} id={product.id} value={product.category}>
                {product.category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <select
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Select brand</option>
            {productsHome.map((product, i) => (
              <option key={i} id={product.id} value={product.brand}>
                {product.brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sale">Sale:</label>
          <input
            type="number"
            id="sale"
            value={sale}
            onChange={(e) => setSale(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
}

// import { useState, useContext } from "react";
// import { ProductHomeContext } from "../contexts/ProductProvider";

// export default function Add() {
//   const { setProductsHome, productsHome } = useContext(ProductHomeContext);
//   const [product, setProduct] = useState({
//     id: "",
//     imageUrl: "",
//     name: "",
//     price: "",
//     brand: "",
//     category: "",
//     sale: "",
//   });

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send a POST request to the server to add the new product
//     fetch("http://localhost:2300/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the state of the productsHome array with the new product
//         setProductsHome((prevProducts) => [...prevProducts, product]);
//         console.log(data.message);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="id">ID:</label>
//         <input
//           type="text"
//           id="id"
//           name="id"
//           value={product.id}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="imageUrl">Image URL:</label>
//         <input
//           type="text"
//           id="imageUrl"
//           name="imageUrl"
//           value={product.imageUrl}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={product.name}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="price">Price:</label>
//         <input
//           type="text"
//           id="price"
//           name="price"
//           value={product.price}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="brand">Brand:</label>
//         <input
//           type="text"
//           id="brand"
//           name="brand"
//           value={product.brand}
//           onChange={handleChange}
//         />
//         {/* {productsHome.map((product, i) => (
//           // <tr key={product.id}>

//           <input type="text" value={product.category} key={i} />
//         ))}
//         {} */}

//         <br />
//         <label htmlFor="category">Category:</label>
//         <input
//           type="text"
//           id="category"
//           name="category"
//           value={product.category}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="sale">Sale:</label>
//         <input
//           type="text"
//           id="sale"
//           name="sale"
//           value={product.sale}
//           onChange={handleChange}
//         />
//         <br />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// }
