import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "FRUIT & VEGETABLES",
      links: [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Packaged Produce",
        "Party Trays",
      ],
    },
    {
      title: "BREAKFAST & DAIRY",
      links: [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Packaged Produce",
        "Party Trays",
      ],
    },
    {
      title: "MEAT & SEAFOOD",
      links: [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Packaged Produce",
        "Party Trays",
      ],
    },
    {
      title: "BEVERAGES",
      links: [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Packaged Produce",
        "Party Trays",
      ],
    },
    {
      title: "BREADS & BAKERY",
      links: [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Packaged Produce",
        "Party Trays",
      ],
    },
  ];

  return (
    <footer className="w-full bg-white px-4 md:px-16 py-10 font-sans text-gray-600">
      <div className="container mx-auto">
        {/* Top Features Bar */}
        <div className="flex flex-wrap justify-between gap-4 mb-8 text-sm border-b border-gray-100 pb-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">👕</span>{" "}
            <span>Everyday fresh products</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🚚</span>{" "}
            <span>Free delivery for order over $70</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>{" "}
            <span>Daily Mega Discounts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">💰</span>{" "}
            <span>Best price on the market</span>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#6347d1] font-bold text-sm mb-5 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3 text-[13px] text-gray-500">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-black cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 gap-4">
          <p className="text-sm text-gray-400">
            Copyright 2024. All rights reserved
          </p>

          <div className="flex gap-3">
            <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-[#6347d1] hover:bg-gray-50 cursor-pointer">
              <i className="fab fa-facebook-f"></i>{" "}
              {/* Use FontAwesome icons here */}
              <span className="text-xs">f</span>
            </div>
            <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-[#6347d1] hover:bg-gray-50 cursor-pointer">
              <span className="text-xs">t</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
