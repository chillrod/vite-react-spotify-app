import React from "react";
import { useRecoilValue } from "recoil";

import { UserAuthController } from "../../../modules/user/useCases/user-auth/controller";
import { PlayerController } from "../../../modules/audio/useCases/player/controller";
import { PlayerState } from "../../../modules/audio/useCases/player/components/playerState";

import SpotleafLogo from "../../../config/spotleaf/logo.svg";
import SpotleafInsideLogo from "../../../config/spotleaf/insidelogo.svg";

import {
  NavBarContainer,
  NavBarMusicContainer,
  NavBarInsideLogo,
  NavBarLogo,
} from "./styles";

import { MusicSearch } from "../../../modules/audio/useCases/music/components/musicSearch";

export const NavBar = () => {
  const getIsUserAuthenticated = useRecoilValue(
    UserAuthController.state.getIsUserAuthenticated
  );

  const accessToken = useRecoilValue(UserAuthController.state.getToken);

  const getCurrentPlaying = useRecoilValue(
    PlayerController.state.getCurrentPlaying
  );

  return (
    <NavBarContainer>
      {!getIsUserAuthenticated && (
        <NavBarLogo src={SpotleafLogo} alt="spotleaf logo" />
      )}

      {getIsUserAuthenticated && (
        <NavBarInsideLogo src={SpotleafInsideLogo} alt="spotleaf logo" />
      )}

      <NavBarMusicContainer>
        {getCurrentPlaying.length !== 0 && <PlayerState />}
        {!getCurrentPlaying.length && <div />}
        {getIsUserAuthenticated && <MusicSearch accessToken={accessToken} />}
      </NavBarMusicContainer>
    </NavBarContainer>
  );
};
