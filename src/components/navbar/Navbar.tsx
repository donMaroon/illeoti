import Login from "../../pages/authentication/Login";
import SignUp from "../../pages/authentication/SignUp";
import CartDropDown from "../../pages/cart/component/CartDropDown";
import FavouritesDropDown from "../../pages/cart/component/Favourites";
import Search from "../search/Search";

const Navbar = () => {
  const isLogin = true;
  return (
    <nav className="bg-white max-w-300 mx-auto py-7 lato hidden lg:flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="text-xl font-bold lato text-black">Products</p>
        <Search
          placeholder="Search any drink or Brand here..."
          value=""
          onChange={() => {}}
        />
      </div>
      {isLogin ? (
        <div className="flex items-center gap-7">
          <p className="text-xl font-bold text-black">Contact Us</p>
          <div className="flex items-center gap-2">
            <FavouritesDropDown />
            <CartDropDown />
          </div>
          <div className="w-10 h-10 bg-black rounded-full"></div>
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <p className="text-xl font-bold text-black">Contact Us</p>
          <SignUp />
          <Login />
        </div>
      )}
    </nav>
  );
};

export default Navbar;