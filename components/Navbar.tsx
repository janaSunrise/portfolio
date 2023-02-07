import type { Dispatch, SetStateAction } from "react";
import type { contentDisplay } from "types";

const buttonClass = "text-white hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 mr-2 focus:ring-gray-700 border-gray-700";

interface Props {
  setDisplay: Dispatch<SetStateAction<contentDisplay>>;
}

const Navbar = ({ setDisplay }: Props) => {
  return (
    <nav className="flex mt-8 space-x-4">
      <button className={buttonClass} onClick={() => setDisplay('home')}>/home</button>
      <button className={buttonClass} onClick={() => setDisplay('tech')}>/tech-stack</button>
    </nav>
  );
};

export default Navbar;
