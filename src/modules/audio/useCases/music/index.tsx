import React, { useEffect } from "react";

import { usePalette } from "react-palette";

import { MusicImageDTO, MusicSectionDTO } from "./dto";

import { returnImageUrl } from "../../../../helpers/imageUrl";
import { returnIndexOfArray } from "../../../../helpers/returnIndex";

import { MusicCardContainer } from "./components/musicCard";

import { MusicList } from "./styles";

export const MusicSection = ({
  music,
  selectedTrack,
  toggleActive,
  queueOrder,
}: MusicSectionDTO) => {
  const attachPallete = (images: MusicImageDTO[]) => {
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
          queueOrder={queueOrder}
          selectedTrack={selectedTrack}
          musicTrack={musicTrack}
          attachPallete={attachPallete}
        />
      ))}
    </MusicList>
  );
};
