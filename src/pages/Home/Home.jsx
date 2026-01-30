import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import CategorySideNav from "../../Components/Home/sideNav/CategorySideNav ";

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
    </div>
  );
};

export default Home;
