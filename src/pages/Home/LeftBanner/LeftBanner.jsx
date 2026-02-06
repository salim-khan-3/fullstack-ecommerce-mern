import banner1 from "../../../assets/banner1.png"

const LeftBanner = () => {
  return (
    /* lg:sticky ebong lg:top-4 use kora hoyeche jate desktop-e upore ektu gap thake */
    <div className="flex flex-col gap-10 lg:sticky lg:top-60 h-fit">
      
      {/* Container width-ti responsive kora hoyeche */}
      <div className="w-full max-w-[375px] overflow-hidden rounded-lg shadow-md">
        <img className="w-full h-auto object-cover" src={banner1} alt="Banner 1" />
      </div>

      <div className="w-full max-w-[375px] overflow-hidden rounded-lg shadow-md">
        <img className="w-full h-auto object-cover" src={banner1} alt="Banner 2" />
      </div>
      
    </div>
  );
};

export default LeftBanner;

