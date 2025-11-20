import React from 'react'
import Main from "../components/Main";
import RunningBrand from "../components/RunningBrand";
import Recommend from "../components/Recommend";
import { ProductStore } from '../store/store'
import ProductList from "../components/ProductList";

const LaptopPage = () => {
  const {computer} = ProductStore();
  return (
    <div className="w-screen bg-[#ffffff]">
      <div>
        <Main />
      </div>
      <div>
        <RunningBrand />
      </div>
      <div>
        <Recommend data={computer} />
      </div>
      <div>
        <ProductList data={computer} />
      </div>
    </div>
  );
}

export default LaptopPage;
