import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import CategorySideNav from "../../Components/Home/sideNav/CategorySideNav ";
import BestSellers from "./BestSellers/BestSellers";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import NewProducts from "./NewProducts/NewProducts";
import PromoSection from "./PromoSection/PromoSection";

const Home = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-4">
        <aside className="z-5">
            <CategorySideNav></CategorySideNav>
        </aside>
        <div className="col-span-3">
            <Banner></Banner>
        </div>

      </div>
      <FeaturedCategories></FeaturedCategories>

        <BestSellers></BestSellers>

        <NewProducts></NewProducts>

        <PromoSection></PromoSection>
    </div>
  );
};

export default Home;
