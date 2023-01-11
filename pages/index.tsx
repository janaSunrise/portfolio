import axios from 'axios';
import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';

import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon
} from '@radix-ui/react-icons';

import { TechStack } from '../components/TechStack';
import NowPlaying from '../components/NowPlaying';
import Time from '../components/Time';

const Home = () => {
  const {
    data: song,
    error,
    isLoading
  } = useQuery({
    queryKey: ['spotify'],
    queryFn: async () => {
      const res = await axios.get('/api/spotify');

      return res.data;
    },
    refetchOnWindowFocus: true
  });

  return (
    <Suspense fallback={null}>
      <div className="mx-16 md:mx-48 lg:mx-56 xl:mx-64">
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-400 font-title">
            hey i am
          </h2>
          <h1 className="text-5xl font-bold text-accent font-title">
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

        <Time />
        {!isLoading && !error && song && <NowPlaying song={song} />}
        <TechStack />
      </div>
    </Suspense>
  );
};

export default Home;
