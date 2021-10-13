import React from "react";

import { useRecoilValue } from "recoil";

import { MusicCardDTO } from "../dto";

import { returnImageUrl } from "../../../../../helpers/imageUrl";

import { returnArtist } from "../../../../../helpers/returnArtist";

import { returnIndexOfArray } from "../../../../../helpers/returnIndex";

import { TextComponent } from "../../../../../shared-components/UI/Text";
import { BadgeComponent } from "../../../../../shared-components/UI/Badge";

import { MusicCard, MusicCardData, MusicCardBadge } from "./musicCard.styles";

export const MusicCardContainer = ({
  behavior,
  selectedTrack,
  toggleActive,
  musicTrack,
  attachPallete,
  queueOrder,
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
        active: false,
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
        order: queueOrder[0],
        active: musicTrack?.active,
        duration_ms: musicTrack?.duration_ms,
      });
    }
  };

  const parseMusicCardQueueTextBehavior = (
    behavior?: string,
    active?: boolean,
    order?: number
  ) => {
    if (!active) return "Removed from queue";

    return `Active in order ${order}`;
  };

  const parseBadgeVariant = (active?: boolean) => {
    if (!active) return "subtle";

    return "solid";
  };

  const parseBadgeColor = (active?: boolean) => {
    if (!active) return "red";

    return "green";
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

        {behavior === "Queue" && (
          <MusicCardBadge>
            <BadgeComponent
              colorScheme={parseBadgeColor(musicTrack?.active)}
              variant={parseBadgeVariant(musicTrack?.active)}
              text={parseMusicCardQueueTextBehavior(
                behavior,
                musicTrack?.active,
                musicTrack?.order
              )}
            />
          </MusicCardBadge>
        )}
      </MusicCardData>
    </MusicCard>
  );
};
