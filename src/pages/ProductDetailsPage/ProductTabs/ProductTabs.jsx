import { useState } from "react";
import ReviewSection from "../ReviewSection/ReviewSection";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const tabs = [
  { id: "description", label: "Description" },
  { id: "additional", label: "Additional Info" },
  { id: "reviews", label: "Reviews (3)" },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-14 border rounded-2xl p-6 sm:p-8">
      
      {/* Tabs Header */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition
              ${
                activeTab === tab.id
                  ? "bg-green-50 text-green-600 border-green-300"
                  : "text-gray-500 border-gray-300 hover:text-black"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {activeTab === "description" && (
          <p>
            Noodles & Company is an American fast-casual restaurant that
            offers international and American noodle dishes and pasta
            in addition to soups and salads. Founded in 1995 by Aaron
            Kennedy and headquartered in Broomfield, Colorado.
          </p>
        )}

        {activeTab === "additional" && (
          <AdditionalInfo></AdditionalInfo>
        )}

        {activeTab === "reviews" && (
          <ReviewSection></ReviewSection>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
