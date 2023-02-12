export type contentDisplay = 'home' | 'tech';

export interface SpotifyPlaying {
  name: string;
  artist: string;
  image: string;
}

export interface Social {
  name: string;
  url: string;
  copy: boolean; // If copy is true, the url will be copied to the clipboard
  icon: JSX.Element;
}
