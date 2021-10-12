import React from "react";

import { MusicCardDTO } from "../dto";

import { returnImageUrl } from "../../../../../helpers/imageUrl";

import { returnArtist } from "../../../../../helpers/returnArtist";

import { returnIndexOfArray } from "../../../../../helpers/returnIndex";

import { TextComponent } from "../../../../../shared-components/UI/Text";

import { MusicCard, MusicCardData } from "./musicCard.styles";

export const MusicCardContainer = ({
  behavior,
  selectedTrack,
  toggleActive,
  musicTrack,
  attachPallete,
}: MusicCardDTO) => {
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
