import { SetterOrUpdater } from "recoil";

export interface SpotifyPlayerDTO {
  isPlaying: [boolean, SetterOrUpdater<boolean>];
}

export interface PlayerSdkDTO {
  children?: JSX.Element;
  getAccessToken: any;
}

export interface PlayTrackDTO {
  playTrack?: SetterOrUpdater<boolean>;
  isPlaying: [boolean, SetterOrUpdater<boolean>];
  queueChanged: {}[];
  children?: JSX.Element;
}

export interface PlayerSectionDTO {
  playTrack: SetterOrUpdater<boolean>;
  getAccessToken?: any;
  isPlaying: [boolean, SetterOrUpdater<boolean>];
  queueChanged: {}[];
}
