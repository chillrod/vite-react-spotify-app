import React from "react";

import { useRecoilValue } from "recoil";

import { PlayerController } from "../controller";

import { SpotleafColors } from "../../../../../config/spotleaf/colors";

import { TextComponent } from "../../../../../shared-components/UI/Text";

import { CurrentSongFrequency } from "../components/currentSong.styles";

import { PlayerStateContainer } from "./playerState.styles";

export const PlayerState = () => {
  const getCurrentPlaying = useRecoilValue(
    PlayerController.state.getCurrentPlaying
  );

  return (
    <PlayerStateContainer>
      <CurrentSongFrequency spotleafPrimary={SpotleafColors.primary} />
      <TextComponent
        isText
        fontSize="1rem"
        color={SpotleafColors.primary}
        text={`playing ${getCurrentPlaying}`}
      />
    </PlayerStateContainer>
  );
};
