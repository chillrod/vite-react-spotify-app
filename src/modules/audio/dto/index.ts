export interface MusicTrackDTO {
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
