import axios from 'axios';

import type { SpotifyPlaying } from '../types';

const AUTH_URL = 'https://accounts.spotify.com';
const BASE_URL = 'https://api.spotify.com/v1/me';

export class Spotify {
  private clientId: string;
  private clientSecret: string;
  private refreshToken: string;

  constructor(clientId: string, clientSecret: string, refreshToken: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.refreshToken = refreshToken;
  }

  public async getAccessToken(): Promise<string> {
    const encoded = Buffer.from(
      `${this.clientId}:${this.clientSecret}`
    ).toString('base64');

    const response = await axios.post(
      `${AUTH_URL}/api/token`,
      {
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken
      },
      {
        headers: {
          Authorization: `Basic ${encoded}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return `Bearer ${response.data.access_token}`;
  }

  public async getCurrentlyPlaying(): Promise<SpotifyPlaying> {
    const accessToken = await this.getAccessToken();

    const response = await axios.get(`${BASE_URL}/player/currently-playing`, {
      headers: {
        Authorization: accessToken
      }
    });

    // if status is 204, no song is playing
    if (response.status === 204) {
      return {} as SpotifyPlaying;
    }

    const data = response.data;

    if (data.currently_playing_type === 'track') {
      return {
        name: data.item.name,
        artist: data.item.artists[0].name,
        image: data.item.album.images[1].url
      };
    } else if (data.currently_playing_type === 'album') {
      return {
        name: data.item.name,
        artist: data.item.show.publisher,
        image: data.item.images[1].url
      };
    }
    // since it's not any of the above
    else {
      return {} as SpotifyPlaying;
    }
  }
}
