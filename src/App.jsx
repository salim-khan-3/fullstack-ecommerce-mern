import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./Components/layouts/Navbar/Navbar";
import Footer from "./Components/layouts/Footer/Footer";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Listing from "./pages/Listing/Listing";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry,setSelectedCountry] = useState("");

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
    setSelectedCountry
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
        <Footer></Footer>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
