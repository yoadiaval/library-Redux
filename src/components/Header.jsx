import Link from "./Link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

function Header() {
  const [nav, setNav] = useState(false);
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
  ];
  const handleNav = () => {
    setNav(!nav);
  };
  const renderedLinks = links.map((link) => {
    return (
      <li key={link.label}>
        <Link to={link.path} activeClassName="font-bold text-amber-400 ">
          {link.label}
        </Link>
      </li>
    );
  });
  return (
    <div>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full font-bold text-3xl text-amber-400">Book Lover</h1>
        <div>
          <ul className="hidden md:flex space-x-4 text-slate-500">
            {renderedLinks}
          </ul>
          <div
            onClick={handleNav}
            className="block fixed right-5 top-10 p-1 rounded z-10 bg-black md:hidden"
          >
            {!nav ? (
              <FiMenu size={20} className="text-white" />
            ) : (
              <AiOutlineClose size={20} className="text-white " />
            )}
          </div>
          <div
            className={
              !nav
                ? "fixed left-[-100%]"
                : "fixed z-10 left-0 top-0 w-[60%] h-full bg-black  ease-in-out duration-500 p-8"
            }
          >
            <h1 className="w-full  font-bold text-3xl border-b text-amber-400 pt-5">
              Book Lover
            </h1>
            <ul className="pt-24 uppercase flex flex-col space-y-5">
              {renderedLinks}
            </ul>
            <div className="flex justify-center space-x-3 fixed bottom-2 text-amber-400">
              <CiFacebook size={25} />
              <CiTwitter size={25} />
              <CiInstagram size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
