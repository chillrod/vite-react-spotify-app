import React from "react";

import { usePalette } from "react-palette";

import { returnImageUrl } from "../../../../helpers/imageUrl";
import { returnIndexOfArray } from "../../../../helpers/returnIndex";
import { returnArtist } from "../../../../helpers/returnArtist";

import { TextComponent } from "../../../../shared-components/UI/Text";

import { MusicCard, MusicCardData, MusicList } from "./styles";

import { SpotleafColors } from "../../../../config/spotleaf/colors";

interface MusicSectionProps {
  active?: boolean;
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
        height: number;
        width: number;
      };
    };
  }[];
  selectedTrack: (musicTrack: {
    uri?: string;
    name?: string;
    image?: string;
    duration_ms?: number;
    active?: boolean;
  }) => void;
}

interface MusicTrackProps {
  album?: {
    name?: string;

    artists?: {
      name?: string;
    };

    images: {
      url?: string;
      height: number;
      width: number;
    };
  };
}

export const MusicSection = ({
  items,
  selectedTrack,
  active,
}: MusicSectionProps) => {
  const attachPallete = (musicTrack: MusicTrackProps) => {
    const imageUrl = returnImageUrl(
      returnIndexOfArray(musicTrack?.album?.images, 1)
    );

    const { data } = usePalette(imageUrl);

    return data.darkMuted;
  };

  return (
    <MusicList>
      {items.map((musicTrack) => (
        <MusicCard
          whileHover={{ scale: 1.05 }}
          color={attachPallete(musicTrack)}
          key={musicTrack.uri}
          onClick={() =>
            selectedTrack({
              uri: musicTrack?.uri,
              name: musicTrack?.name,
              image: returnImageUrl(
                returnIndexOfArray(musicTrack.album?.images, 1)
              ),
              active: true,
              duration_ms: musicTrack?.duration_ms,
            })
          }
        >
          <>
            <img
              src={returnImageUrl(
                returnIndexOfArray(musicTrack.album?.images, 1)
              )}
              alt={musicTrack.name}
            />
            <MusicCardData>
              <TextComponent text={musicTrack.name} as="h2" size="md" />
              <TextComponent
                text={
                  returnArtist(
                    returnIndexOfArray(musicTrack.album?.artists, 0)
                  ) || "Loading"
                }
                as="p"
                size="sm"
              />
            </MusicCardData>
          </>
        </MusicCard>
      ))}
    </MusicList>
  );
};
