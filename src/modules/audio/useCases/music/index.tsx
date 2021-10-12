import React from "react";

import { usePalette } from "react-palette";

import { returnImageUrl } from "../../../../helpers/imageUrl";
import { returnIndexOfArray } from "../../../../helpers/returnIndex";

import { MusicList } from "./styles";

import { MusicCardContainer } from "./components/musicCard";

interface MusicSectionProps {
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

interface MusicImageProps {
  url?: string;
  height?: number;
  width?: number;
}

export const MusicSection = ({
  music,
  selectedTrack,
  toggleActive,
}: MusicSectionProps) => {
  const attachPallete = (images: MusicImageProps[]) => {
    if (images.length) {
      const imageUrl = returnImageUrl(returnIndexOfArray(images, 1));

      const { data } = usePalette(imageUrl ? imageUrl : "");

      return data.darkMuted;
    }
  };

  return (
    <MusicList>
      {music?.items.map((musicTrack) => (
        <MusicCardContainer
          behavior={music.MUSIC_SECTION_BEHVAVIOR}
          toggleActive={toggleActive}
          selectedTrack={selectedTrack}
          musicTrack={musicTrack}
          attachPallete={attachPallete}
        />
      ))}
    </MusicList>
  );
};
