import { useState } from 'react';

import { TechStack } from 'components/TechStack';
import NowPlaying from 'components/NowPlaying';
import Time from 'components/Time';
import About from 'components/About';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Socials from 'components/Socials';

import type { contentDisplay } from 'types';

const CONTENT_MAP: Record<contentDisplay, JSX.Element> = {
  home: <About />,
  tech: <TechStack />
};

const Home = () => {
  const [content, setContent] = useState<contentDisplay>('home');

  return (
    <>
      <Navbar setDisplay={setContent} />

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-400 font-title">
          Hey! I am,
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-accent font-title">
          Sunrit Jana
        </h1>
      </div>

      <p className="mt-2 text-md font-medium text-accent-secondary">
        Full-stack & ML engineer.
        <br />
        Wizard, generalist, deviant, mostly water.
        <br />
        Researches, makes weird stuff, and writes.
      </p>

      <div className="my-4">
        <Socials />
      </div>

      <div className="grid my-4 gap-2">
        <Time />
      </div>

      <div>
        <NowPlaying />
      </div>

      {CONTENT_MAP[content]}

      <Footer />
    </>
  );
};

export default Home;
