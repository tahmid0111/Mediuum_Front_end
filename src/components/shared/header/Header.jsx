import Drawer from "./Drawer";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  console.log("header")
  return (
    <div className="bg-yellow-500">
      <div className="grid grid-cols-12 px-10 md:px-5 lg:px-10 xl:px-20 py-4 lg:py-5">
        <div className="col-span-4">
          <Logo />
        </div>
        <div className="col-span-8">
          <Menu />
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Header;
