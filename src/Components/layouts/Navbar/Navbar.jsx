import TopStrip from '../../Header/TopStrip/TopStrip';
import MiddleHeader from '../../Header/MiddleHeader/MiddleHeader';
import CategoryNavigation from '../../Header/CategoryNavigation/CategoryNavigation';

const Navbar = () => {
  return (
  <div className='sticky top-0 z-40'>
  
        <TopStrip />
        <MiddleHeader />
      
        <CategoryNavigation />
      
    </div>
  );
};

export default Navbar;


