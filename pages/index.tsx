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
      <Navbar setContent={setContent} />

      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-400 font-title my-2">
          Sunrit Jana
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-accent font-title">
          ML engineer helping
          <span className="text-yellow-400"> robots take over the world.</span>
        </h1>
      </div>

      <p className="my-4 text-md font-medium text-accent-secondary">
        Full-stack engineer who researches, makes weird stuff online, and
        writes.
        <br />
        Wizard, generalist, deviant, but mostly water.
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
