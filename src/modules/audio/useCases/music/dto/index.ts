import { SetterOrUpdater } from "recoil";

export interface MusicSectionDTO {
  music?: {
    MUSIC_SECTION_BEHVAVIOR: string;
    items: {
      name?: string;
      uri?: string;
      duration_ms?: number;
      order?: number;

      album?: {
        name?: string;

        artists?: {
          name?: string;
        };

        images: {
          url?: string;
          height?: number;
          width?: number;
        }[];
      };
    }[];
  };
  queueOrder: [number, SetterOrUpdater<number>];

  selectedTrack: (musicTrack: {
    uri?: string;
    name?: string;
    album?: {
      name?: string;
      images?: { url?: string; height?: number; width?: number }[];
      artists?: { name?: string };
    };
    duration_ms?: number;
    active?: boolean;
  }) => void;

  toggleActive: (musicTrack: {
    uri?: string;
    name?: string;
    order?: number;
    album?: {
      name?: string;
      images?: { url?: string; height?: number; width?: number }[];
      artists?: { name?: string };
    };
    duration_ms?: number;
    active?: boolean;
  }) => void;
}

export interface MusicImageDTO {
  url?: string;
  height?: number;
  width?: number;
}

interface MusicCardImageDTO {
  url?: string;
  height?: number;
  width?: number;
}

export interface MusicCardDTO {
  behavior?: string;
  queueOrder: [number, SetterOrUpdater<number>];
  musicTrack?: {
    active?: boolean;
    name?: string;
    uri?: string;
    duration_ms?: number;
    order?: number;

    album?: {
      name?: string;

      artists?: {
        name?: string;
      };

      images: {
        url?: string;
        height?: number;
        width?: number;
      }[];
    };
  };
  attachPallete: (images: MusicCardImageDTO[]) => string | undefined;

  selectedTrack: (musicTrack: {
    uri?: string;
    name?: string;
    album?: {
      name?: string;
      images?: { url?: string; height?: number; width?: number }[];
      artists?: { name?: string };
    };
    duration_ms?: number;
    active?: boolean;
    order?: any;
  }) => void;

  toggleActive: (musicTrack: {
    uri?: string;
    name?: string;
    order?: number;
    album?: {
      name?: string;
      images?: { url?: string; height?: number; width?: number }[];
      artists?: { name?: string };
    };
    duration_ms?: number;
    active?: boolean;
  }) => void;
}
