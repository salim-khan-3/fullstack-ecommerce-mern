import React from "react";
import Banner from "./Banner/Banner";
import CategorySideNav from "./sideNav/CategorySideNav ";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import PromoSection from "./PromoSection/PromoSection";
import LeftBanner from "./LeftBanner/LeftBanner";
import BestSeller from "./BestSeller/BestSeller";
import NewProduct from "./NewProduct/NewProduct";
import NewsletterSection from "./NewsletterSection/NewsletterSection";
import Newsletter from "./NewsletterSection/NewsletterSection";

const Home = () => {
  return (
    <div className="">
      <div className="grid container mx-auto px-4 grid-cols-4">
        <aside className="z-5">
          <CategorySideNav></CategorySideNav>
        </aside>
        <div className="col-span-3">
          <Banner></Banner>
        </div>
      </div>
      <FeaturedCategories></FeaturedCategories>

      <section>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-4 gap-10 items-start">
            {/* Left Side Banner */}
            <LeftBanner></LeftBanner>

            {/* Right Side Content */}
            <div className="col-span-3">
              <BestSeller></BestSeller>
              <NewProduct></NewProduct>
            </div>
          </div>
        </div>
      </section>

      <PromoSection></PromoSection>

      <section>
        <Newsletter></Newsletter>
      </section>
    </div>
  );
};

export default Home;
