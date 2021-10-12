import { SetterOrUpdater } from "recoil";

interface MusicTrackProps {
  uri?: string;
  name?: string;
  album?: {
    name?: string;
    images?: { url?: string; height?: number; width?: number }[];
    artists?: { name?: string };
  };
  artists?: { name: string };
  active?: boolean;
  duration_ms?: number;
}

export const handleSelectedMusic = (
  musicTrack: MusicTrackProps,
  getPlayerQueue: {}[],
  setPlayerQueue: SetterOrUpdater<{}[]>
) => {
  const checkIfMusicExists = getPlayerQueue.some(
    (track: { uri?: string }) => track.uri === musicTrack.uri
  );

  if (!checkIfMusicExists) {
    setPlayerQueue((oldState) => [...oldState, musicTrack]);
  }
};
