import Main from "./components/Main";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from "./components/contexts/ProductProvider";
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Main />
      </ProductProvider>
    </div>
  );
}

export default App;
