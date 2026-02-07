import React from 'react';

const ReviewSection = () => {
  const ratings = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 50 },
    { stars: 3, percentage: 55 },
    { stars: 2, percentage: 35 },
    { stars: 1, percentage: 25 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white text-gray-700 font-sans">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">Description</button>
        <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">Additional Info</button>
        <button className="px-6 py-2 border border-green-100 rounded-full text-green-600 bg-green-50 font-medium">Reviews (3)</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Side: Reviews List & Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Customer questions & answers</h2>
          
          {/* Review Card */}
          <div className="border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 mb-12 shadow-sm">
            <div className="flex flex-col items-center min-w-[100px]">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
                alt="Rinku Verma" 
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
              />
              <p className="text-sm font-bold mt-3 text-gray-800">Rinku Verma</p>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-400 text-sm italic">01/03/1993</span>
                <div className="text-yellow-400 flex tracking-tight">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                </div>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013...
              </p>
            </div>
          </div>

          {/* Add Review Form */}
          <div className="mt-8 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Add a review</h3>
            <form className="space-y-4">
              <textarea 
                placeholder="Write a Review" 
                className="w-full border border-gray-300 rounded-lg p-4 h-32 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="border border-gray-300 rounded-lg p-3 w-full md:w-64 focus:ring-2 focus:ring-green-500 outline-none transition"
                />
                <div className="text-yellow-400 text-2xl cursor-pointer flex gap-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                </div>
              </div>
              <button 
                type="submit" 
                className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition underline underline-offset-4"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Rating Progress Bars */}
        <div className="bg-white">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Customer reviews</h2>
          <div className="flex items-center gap-3 mb-8">
            <div className="text-yellow-400 text-xl">★★★★☆</div>
            <span className="text-gray-600 font-medium">4.8 out of 5</span>
          </div>

          <div className="space-y-4">
            {ratings.map((item) => (
              <div key={item.stars} className="flex items-center gap-4">
                <span className="text-sm text-gray-500 w-10">{item.stars} star</span>
                <div className="flex-1 bg-gray-100 rounded-full h-4">
                  <div 
                    className="bg-green-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 w-8">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewSection;