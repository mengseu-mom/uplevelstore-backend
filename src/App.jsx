import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/Layouts/RootLayout";
import SmartPhonePage from "./pages/SmartPhonePage";
import WatchPage from "./pages/WatchPage";
import LaptopPage from "./pages/LaptopPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import ViewDeatail from "./components/ViewDeatail";
import ViewDetails from "./components/ViewDetails";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<RootLayout />}>
    //       <Route index element={<HomePage />} />
    //       <Route path="smartphone" element={<SmartPhonePage />} />
    //       <Route path="watches" element={<WatchPage />} />
    //       <Route path="laptop" element={<LaptopPage />} />
    //       <Route path="accessories" element={<AccessoriesPage />} />

    //       <Route path="viewdetails" element={<ViewDetails />}>
    //         <Route path=":id" element={<ViewDeatail />} />
    //       </Route>

    //       <Route path="/cart" element={<ShoppingCart />} />
    //       <Route path="/checkout" element={<CheckOut />} />
    //       <Route path="/payment" element={<Payment />} />
    //       <Route path="/placeorder" element={<PlaceOrder />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="smartphone" element={<SmartPhonePage />} />
          <Route path="watches" element={<WatchPage />} />
          <Route path="laptop" element={<LaptopPage />} />
          <Route path="accessories" element={<AccessoriesPage />} />
          <Route path="viewdetails/:id" element={<ViewDeatail />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="payment" element={<Payment />} />
          <Route path="placeorder" element={<PlaceOrder />} />
        </Route>

        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
