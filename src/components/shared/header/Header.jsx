import AnimatedDiv from "../../animation/AnimatedDiv";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="bg-yellow-500">
      <div className="grid grid-cols-12 px-20 py-5">
        <Logo />
        <Menu />
        {/* <AnimatedDiv /> */}
      </div>
    </div>
  );
};

export default Header;
