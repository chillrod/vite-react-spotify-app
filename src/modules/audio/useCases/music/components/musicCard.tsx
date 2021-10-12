import React from "react";

import { returnImageUrl } from "../../../../../helpers/imageUrl";

import { returnArtist } from "../../../../../helpers/returnArtist";

import { returnIndexOfArray } from "../../../../../helpers/returnIndex";

import { TextComponent } from "../../../../../shared-components/UI/Text";

import { MusicCard, MusicCardData } from "./musicCard.styles";

interface MusicImageProps {
  url?: string;
  height?: number;
  width?: number;
}

interface MusicSectionProps {
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
  attachPallete: (images: MusicImageProps[]) => string | undefined;

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
export const MusicCardContainer = ({
  behavior,
  selectedTrack,
  toggleActive,
  musicTrack,
  attachPallete,
}: MusicSectionProps) => {
  const parseOnClickBehavior = (behavior?: string) => {
    if (behavior === "Search") {
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
      });
    }

    if (behavior === "Queue") {
      toggleActive({
        uri: musicTrack?.uri,
        name: musicTrack?.name,
        album: {
          name: musicTrack?.album?.name,
          images: musicTrack?.album?.images,
          artists: musicTrack?.album?.artists,
        },
        active: !musicTrack?.active,
        duration_ms: musicTrack?.duration_ms,
      });
    }
  };

  const parseMusicCardQueueTextBehavior = (
    behavior?: string,
    active?: boolean
  ) => {
    if (behavior !== "Queue") return;

    if (!active) return "Removed from queue";

    return "Active in order";
  };

  return (
    <MusicCard
      whileHover={{ scale: 1.05 }}
      active={musicTrack?.active}
      behavior={behavior}
      color={
        musicTrack?.album?.images
          ? attachPallete(musicTrack?.album?.images)
          : ""
      }
      key={musicTrack?.uri}
      onClick={() => parseOnClickBehavior(behavior)}
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
        <TextComponent
          isText
          text={parseMusicCardQueueTextBehavior(behavior, musicTrack?.active)}
          fontSize=".9rem"
        />
      </MusicCardData>
    </MusicCard>
  );
};
