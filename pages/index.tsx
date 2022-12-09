import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon
} from '@radix-ui/react-icons';

import { TechStack } from '../components/TechStack';

import type { SpotifyPlaying } from '../types';
import NowPlaying from '../components/NowPlaying';

const Home = () => {
  const [song, setSong] = useState<SpotifyPlaying>();

   useEffect(() => {
     const getSong = async () => {
       const res = await axios.get('/api/spotify');
       setSong(res.data);
     };

     getSong();
   }, []);

  return (
    <div className="mx-16 md:mx-48 lg:mx-56 xl:mx-64">
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-400 font-title">
          hey i am
        </h2>
        <h1 className="text-6xl font-bold text-accent font-title">
          sunrit jana
        </h1>
      </div>

      <p className="mt-4 text-lg font-medium text-accent-secondary">
        sixteen. indian.
        <br />
        wizard, generalist, deviant, mostly water.
        <br />
        researches, makes weird stuff, and writes.
      </p>

      <div className="grid grid-flow-col w-36 mt-6 text-lg">
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

      {song && <NowPlaying song={song} /> }

      <div className="pb-5 mt-6">
        <h2 className="text-3xl font-semibold underline underline-offset-4 text-accent font-title">
          techstack;
        </h2>

        <TechStack
          name="languages"
          elements={['python', 'typescript', 'rust']}
        />
        <TechStack
          name="frontend"
          elements={['react', 'next.js', 'chakra', 'svelte']}
        />
        <TechStack
          name="backend"
          elements={['flask', 'django', 'fastapi', 'express', 'fastify']}
        />
        <TechStack name="cloud" elements={['aws']} />
        <TechStack
          name="database"
          elements={['postgresql', 'mysql', 'mongodb', 'redis']}
        />
        <TechStack
          name="ml"
          elements={['tensorflow', 'pytorch', 'scikit-learn']}
        />
        <TechStack
          name="others"
          elements={['docker', 'git', 'linux', 'ci/cd']}
        />
      </div>
    </div>
  );
};

export default Home;
