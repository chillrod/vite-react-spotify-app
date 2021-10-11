import React from "react";

import { useRecoilValue } from "recoil";

import { PlayerController } from "../controller";

import { SpotleafColors } from "../../../../../config/spotleaf/colors";

import { TextComponent } from "../../../../../shared-components/UI/Text";

import { CurrentSongFrequency } from "./playerState.styles";

import { CurrentPlayingContainer } from "./currentPlayingState.styles";

export const CurrentPlayingState = () => {
  const getCurrentPlaying = useRecoilValue(
    PlayerController.state.getCurrentPlaying
  );

  return (
    <CurrentPlayingContainer>
      <CurrentSongFrequency spotleafPrimary={SpotleafColors.primary} />
      <TextComponent
        isText
        fontSize="1rem"
        color={SpotleafColors.primary}
        text={`playing ${getCurrentPlaying}`}
      />
    </CurrentPlayingContainer>
  );
};
