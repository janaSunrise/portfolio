import type { Dispatch, SetStateAction } from 'react';
import type { contentDisplay } from 'types';

const buttonClass =
  'text-white focus:outline-none font-medium rounded-lg text-md py-2 focus:ring-gray-700 border-gray-700 hover:text-yellow-400 transition ease-linear duration-200';

interface Props {
  setContent: Dispatch<SetStateAction<contentDisplay>>;
}

const Navbar = ({ setContent }: Props) => {
  return (
    <nav className="flex mt-8 space-x-4">
      <button className={buttonClass} onClick={() => setContent('home')}>
        home
      </button>
      <button className={buttonClass} onClick={() => setContent('tech')}>
        tech-stack
      </button>
    </nav>
  );
};

export default Navbar;
