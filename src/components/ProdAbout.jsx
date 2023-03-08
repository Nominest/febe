import { MENUS } from "../util/data";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./subcomponents/AllProducts";
import LoadMore from "./subcomponents/LoadMore";
import Category from "./subcomponents/Category";
import Brand from "./subcomponents/Brand";
import Add from "./subcomponents/Add";

export default function ProdAbout() {
  return (
    <div className="product-about">
      <Routes>
        <Route path={MENUS[0].url} element={<AllProducts />}></Route>
        <Route path={MENUS[1].url} element={<LoadMore />}></Route>
        <Route path={MENUS[2].url} element={<Category />}></Route>
        <Route path={MENUS[3].url} element={<Brand />}></Route>
        <Route path={MENUS[4].url} element={<Add />}></Route>
        {/* <Route path={MENUS[5].url} element={<Settings />}></Route> */}
        {/* <Route path={`/add`} element={<Add />}></Route> */}
      </Routes>
    </div>
  );
}
