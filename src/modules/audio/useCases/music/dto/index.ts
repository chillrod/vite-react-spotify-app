export interface MusicSectionDTO {
  music?: {
    MUSIC_SECTION_BEHVAVIOR: string;
    items: {
      name?: string;
      uri?: string;
      duration_ms?: number;

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
  musicTrack?: {
    active?: boolean;
    name?: string;
    uri?: string;
    duration_ms?: number;

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
  }) => void;

  toggleActive: (musicTrack: {
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
}
