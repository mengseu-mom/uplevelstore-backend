import React from 'react'
import Main from "../components/Main";
import RunningBrand from "../components/RunningBrand";
import Recommend from "../components/Recommend";
import { ProductStore } from '../store/store'
import ProductList from "../components/ProductList";

const WatchPage = () => {
  const {watches} = ProductStore();
  return (
    <div className="w-screen bg-[#ffffff]">
      <div>
        <Main />
      </div>
      <div>
        <RunningBrand />
      </div>
      <div>
        <Recommend data={watches} />
      </div>
      <div>
        <ProductList data={watches} />
      </div>
    </div>
  );
}

export default WatchPage
