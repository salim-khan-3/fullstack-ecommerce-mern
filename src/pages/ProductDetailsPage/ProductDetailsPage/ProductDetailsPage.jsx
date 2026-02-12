


import ProductDetailCard from "../ProductDetailCard/ProductDetailCard";
import ProductTabs from "../ProductTabs/ProductTabs";

import RelatedProduct from "../RelatedProduct/RelatedProduct";


const ProductDetailsPage = () => {


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="flex flex-col md:flex-row gap-12">
       <ProductDetailCard></ProductDetailCard>
      </div>

      <div>
        <ProductTabs></ProductTabs>
      </div>


      <RelatedProduct></RelatedProduct>


    </div>
  );
};

export default ProductDetailsPage;
