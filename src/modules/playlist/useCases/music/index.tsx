import React from "react";
import { returnImageUrl } from "../../../../helpers/imageUrl";
import { returnIndexOfArray } from "../../../../helpers/returnIndex";
import { TextComponent } from "../../../../shared-components/UI/Text";

import { MusicCard, MusicCardData, MusicList } from "./styles";

interface MusicSectionProps {
  items: {
    name?: string;
    uri?: string;

    album?: {
      name?: string;

      artists?: {
        name?: string;
      };

      images?: {
        url?: string;
        height?: number;
        width?: number;
      };
    };
  }[];
}

export const MusicSection = ({ items }: MusicSectionProps) => {
  return (
    <MusicList>
      {items &&
        items.map((musicTrack) => (
          <MusicCard key={musicTrack.uri}>
            <>
              <img
                src={returnImageUrl(
                  returnIndexOfArray(musicTrack.album?.images, 1)
                )}
                alt=""
              />
              <MusicCardData>
                <TextComponent text={musicTrack.name} as="h2" size="md" />
                <TextComponent
                  text={returnIndexOfArray(musicTrack.album?.artists, 0).name}
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
