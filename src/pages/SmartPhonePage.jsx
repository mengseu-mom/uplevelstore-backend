import React from "react";
import Main from "../components/Main";
import RunningBrand from "../components/RunningBrand";
import Recommend from "../components/Recommend";
import { ProductStore } from "../store/store";
import ProductList from "../components/ProductList";

const SmartPhonePage = () => {
  const { moreDevice} = ProductStore();
  return (
    <div className="w-screen bg-[#ffffff]">
      <div>
        <Main />
      </div>
      <div>
        <RunningBrand />
      </div>
      <div>
        <Recommend data={moreDevice} />
      </div>
      <div>
        <ProductList data={moreDevice} />
      </div>
    </div>
  );
};

export default SmartPhonePage;
