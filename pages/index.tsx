import { useState } from 'react';

import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon
} from '@radix-ui/react-icons';

import { TechStack } from 'components/TechStack';
import NowPlaying from 'components/NowPlaying';
import Time from 'components/Time';
import About from 'components/About';
import Navbar from 'components/Navbar';

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
          hey i am,
        </h2>
        <h1 className="text-5xl font-bold text-accent font-title">
          sunrit jana
        </h1>
      </div>

      <p className="mt-2 text-md font-medium text-accent-secondary">
        sixteen. indian.
        <br />
        full-stack & ML engineer.
        <br />
        wizard, generalist, deviant, mostly water.
      </p>

      <div className="grid grid-flow-col w-36 mt-4 text-lg">
        <a
          href="https://twitter.com/JanaSunrise"
          target="_blank"
          rel="noreferrer"
          className="transition duration-150 hover:opacity-80"
        >
          <TwitterLogoIcon className="w-6 h-6" />
        </a>

        <a
          href="https://github.com/JanaSunrise"
          target="_blank"
          rel="noreferrer"
          className="transition duration-150 hover:opacity-80"
        >
          <GitHubLogoIcon className="w-6 h-6" />
        </a>

        <button
          className="transition duration-150 hover:opacity-80"
          onClick={() =>
            navigator.clipboard.writeText('warriordefenderz@gmail.com')
          }
        >
          <EnvelopeClosedIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="grid my-4 gap-2">
        <Time />
      </div>

      <div>
        <NowPlaying />
      </div>

      {CONTENT_MAP[content]}
    </>
  );
};

export default Home;
