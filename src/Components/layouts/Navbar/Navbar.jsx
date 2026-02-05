import TopStrip from '../../Header/TopStrip/TopStrip';
import MiddleHeader from '../../Header/MiddleHeader/MiddleHeader';
import CategoryNavigation from '../../Header/CategoryNavigation/CategoryNavigation';

const Navbar = () => {
  return (
  <>
  {/* Mobile / Tablet: whole header sticky */}
      <div className="sticky top-0 z-50 lg:static bg-red-400">
        <TopStrip />
        <MiddleHeader />
      </div>

      {/* Large: only CategoryNavigation sticky */}
      <div className="sticky top-0 z-10 bg-red-400 border-b">
        <CategoryNavigation />
      </div>
    </>
  );
};

export default Navbar;


