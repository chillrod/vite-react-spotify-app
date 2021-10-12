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

export const handleToggleActive = (
  musicTrack: MusicTrackProps,
  getPlayerQueue: {}[],
  setPlayerQueue: SetterOrUpdater<{}[]>
) => {
  const findTrackToUpdate =
    getPlayerQueue.find(
      (musicToSearch: { uri?: string }) => musicToSearch.uri === musicTrack.uri
    ) || "";

  const getIndex = getPlayerQueue.indexOf(findTrackToUpdate);

  const removeAndUpdate = getPlayerQueue.map(
    (queues: any, queuesIndex: number) => {
      if (queuesIndex === getIndex) queues = musicTrack;

      return queues;
    }
  );

  setPlayerQueue(removeAndUpdate);
};
