import React from "react";

import { returnImageUrl } from "../../../../../helpers/imageUrl";

import { returnArtist } from "../../../../../helpers/returnArtist";

import { returnIndexOfArray } from "../../../../../helpers/returnIndex";

import { TextComponent } from "../../../../../shared-components/UI/Text";

import { MusicCard, MusicCardData } from "./musicCard.styles";

interface MusicTrackProps {
  url?: string;
  height?: number;
  width?: number;
}

interface MusicSectionProps {
  active?: boolean;
  musicTrack?: {
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
  attachPallete: (images: MusicTrackProps[]) => string | undefined;

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
}
export const MusicCardContainer = ({
  selectedTrack,
  musicTrack,
  attachPallete,
}: MusicSectionProps) => {
  return (
    <MusicCard
      whileHover={{ scale: 1.05 }}
      color={
        musicTrack?.album?.images
          ? attachPallete(musicTrack?.album?.images)
          : ""
      }
      key={musicTrack?.uri}
      onClick={() =>
        selectedTrack({
          uri: musicTrack?.uri,
          name: musicTrack?.name,
          album: {
            name: musicTrack?.album?.name,
            images: musicTrack?.album?.images,
            artists: musicTrack?.album?.artists,
          },
          active: true,
          duration_ms: musicTrack?.duration_ms,
        })
      }
    >
      <img
        src={returnImageUrl(returnIndexOfArray(musicTrack?.album?.images, 1))}
        alt={musicTrack?.name}
      />
      <MusicCardData>
        <TextComponent text={musicTrack?.name} as="h2" size="md" />
        <TextComponent
          text={
            returnArtist(returnIndexOfArray(musicTrack?.album?.artists, 0)) ||
            "Loading"
          }
          as="p"
          size="sm"
        />
      </MusicCardData>
    </MusicCard>
  );
};
