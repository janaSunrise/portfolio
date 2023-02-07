import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { CircleBackslashIcon } from '@radix-ui/react-icons';
import { BsSpotify } from 'react-icons/bs';

import type { SpotifyPlaying } from 'types';

const NowPlaying = () => {
  const {
    data: song,
    error,
    isLoading
  } = useQuery({
    queryKey: ['spotify'],
    queryFn: async () => {
      const { data } = await axios.get('/api/spotify');

      return data as SpotifyPlaying;
    },
    refetchOnWindowFocus: true
  });

  console.log(song);

  if (error || isLoading) return null;

  return (
    <div className="flex flex-row max-w-sm p-2 mt-4 space-x-4 border rounded-md border-tertiary backdrop-blur-[4px] backdrop-filter shadow">
      <div className="flex items-center justify-center w-16 h-16 rounded-md bg-secondary">
        {song?.image ? (
          <img
            src={song?.image}
            alt="Album art"
            height={45}
            width={45}
            className="rounded shadow w-full h-full"
          />
        ) : (
          <CircleBackslashIcon height={24} width={24} />
        )}
      </div>

      <div className="flex flex-col">
        <p className="font-semibold text-sm">{song?.name ?? 'Not playing'}</p>
        {song?.artist && <p className="text-sm text-gray-400">{song.artist}</p>}

        <div className="flex flex-row items-center mt-1 text-xs">
          <BsSpotify className="text-green-500 mr-1" />
          <p className="text-spotify-green">Spotify</p>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
