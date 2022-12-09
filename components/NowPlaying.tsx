import { CircleBackslashIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

import SpotifyImage from '../public/spotify.png';

import type { SpotifyPlaying } from '../types';

interface NowPlayingProps {
  song: SpotifyPlaying;
}

const NowPlaying = ({ song }: NowPlayingProps) => {
  return (
    <div className="flex flex-row max-w-sm p-4 mt-6 space-x-8 border rounded-md border-tertiary">
      {song.image ? (
        <img
          src={song?.image}
          alt="Album art"
          height={50}
          width={100}
          className="rounded shadow-md"
        />
      ) : (
        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-secondary">
          <CircleBackslashIcon height={32} width={32} />
        </div>
      )}

      <div className="flex flex-col space-y-4">
        <p className="font-semibold">{song.name ?? 'Not playing'}</p>
        {song.artist && <p className="text-sm">{song.artist}</p>}
        <Image src={SpotifyImage} alt="Spotify Logo" height={200} width={70} />
      </div>
    </div>
  );
};

export default NowPlaying;
