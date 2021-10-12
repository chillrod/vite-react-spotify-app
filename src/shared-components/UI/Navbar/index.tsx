import React from "react";

import { useRecoilValue } from "recoil";

import { UserAuthController } from "../../../modules/user/useCases/user-auth/controller";
import { PlayerController } from "../../../modules/audio/useCases/player/controller";
import { CurrentPlayingState } from "../../../modules/audio/useCases/player/components/currentPlayingState";

import SpotleafLogo from "../../../config/spotleaf/logo.svg";
import SpotleafInsideLogo from "../../../config/spotleaf/insidelogo.svg";

import { MusicSearch } from "../../../modules/audio/useCases/music/components/musicSearch";

import {
  NavBarContainer,
  NavBarMusicContainer,
  NavBarInsideLogo,
  NavBarLogo,
} from "./styles";

export const NavBar = () => {
  const getIsUserAuthenticated = useRecoilValue(
    UserAuthController.state.getIsUserAuthenticated
  );

  const accessToken = useRecoilValue(UserAuthController.state.getToken);

  const getIsPlaying = useRecoilValue(PlayerController.state.getIsPlaying);

  return (
    <NavBarContainer>
      {!getIsUserAuthenticated && (
        <NavBarLogo src={SpotleafLogo} alt="spotleaf logo" />
      )}

      {getIsUserAuthenticated && (
        <NavBarInsideLogo src={SpotleafInsideLogo} alt="spotleaf logo" />
      )}

      <NavBarMusicContainer>
        {getIsPlaying && <CurrentPlayingState />}
        {!getIsPlaying && <div />}
        {getIsUserAuthenticated && <MusicSearch accessToken={accessToken} />}
      </NavBarMusicContainer>
    </NavBarContainer>
  );
};
