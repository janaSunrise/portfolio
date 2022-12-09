import { Spotify } from '../../lib/spotify';

import type { NextApiRequest, NextApiResponse } from 'next';

import type { SpotifyPlaying } from '../../types';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET as string;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN as string;

const spotify = new Spotify(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN);

const handler = async (_req: NextApiRequest, res: NextApiResponse<SpotifyPlaying>) => {
  const data = await spotify.getCurrentlyPlaying();

  res.status(200).json(data);
}

export default handler;
