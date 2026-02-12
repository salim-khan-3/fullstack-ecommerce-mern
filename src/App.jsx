import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./Components/layouts/Navbar/Navbar";
import Footer from "./Components/layouts/Footer/Footer";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Listing from "./pages/Listing/Listing";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage/ProductDetailsPage";
// <<<<<<< HEAD
import Cart from "./pages/Cart/CartPage/Cart";
import Login from "./pages/Login/Login";
// =======
// import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
// >>>>>>> bccfbeb82c3a41201468644f071514eb5a85f374

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry,setSelectedCountry] = useState("");
  const [isShowHeaderFooter,setisShowHeaderFooter] = useState(true)

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/",
        );
        setCountryList(res.data.data || []);
      } catch (error) {
        console.error("Country fetch error:", error);
      }
    };

    getCountry();
  }, []);

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    isShowHeaderFooter,
    setisShowHeaderFooter,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isShowHeaderFooter === true && <Navbar></Navbar>
        }
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login></Login>}/>
        </Routes>
        <Footer></Footer>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
