import React from "react";
import { useRecoilValue } from "recoil";
import { MusicController } from "../../music/controller";

import { PlayerDeckContainer } from "./playerDeck.styles";

export const PlayerDeck = () => {
  const getSelectedMusic = useRecoilValue(
    MusicController.state.getSelectedMusic
  );

  const returnMusicName = (musicName: string) => {
    return musicName;
  };

  return (
    <PlayerDeckContainer>
      <p>{returnMusicName(getSelectedMusic?.name)}</p>
    </PlayerDeckContainer>
  );
};
