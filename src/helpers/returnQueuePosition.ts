interface MusicTrackProps {
  uri?: string;
  name?: string;
  image?: string;
  active?: boolean;
  duration_ms?: number;
}

export const returnQueuePosition = (musicTrack: MusicTrackProps) => {
  return musicTrack;
};
