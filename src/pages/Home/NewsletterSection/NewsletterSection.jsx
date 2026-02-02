import ff from "../../../assets/category.jpg"


const Newsletter = () => {
  return (
    <section className="bg-[#233a95] py-16 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">
          <p className="text-sm font-semibold opacity-90 mb-2">
            $20 discount for your first order
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Join our newsletter and <br /> get...
          </h2>

          <p className="text-sm opacity-80 mb-6">
            Join our email subscription now to get updates <br />
            on promotions and coupons.
          </p>

          {/* INPUT */}
          <div className="flex bg-white rounded-lg overflow-hidden max-w-md shadow-lg">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-4 text-sm text-gray-700 outline-none"
            />
            <button className="bg-[#2bbef9] text-white px-7 font-bold text-sm hover:bg-[#1fa3d8] transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden lg:flex justify-end">
          <img
            src={ff}
            alt="Newsletter Coupon"
            className="w-[360px] rotate-12 drop-shadow-2xl"
          />

          {/* Decorative icons background (optional) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/icons/pattern.svg')] bg-repeat" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
