import React, { useCallback, useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { UserAuthController } from "../user/useCases/user-auth/controller";
import { MusicController } from "./useCases/music/controller";
import { PlayerController } from "./useCases/player/controller";

import { MusicSection } from "./useCases/music";
import { PlayerSection } from "./useCases/player";

import { InputComponent } from "../../shared-components/UI/Input";
import { TextComponent } from "../../shared-components/UI/Text";

import { AudioSection, AudioSearchSection } from "./styles";

export const Audio = () => {
  const accessToken = useRecoilValue(UserAuthController.state.getToken);

  const isUserAuthenticated = useRecoilValue(
    UserAuthController.state.getIsUserAuthenticated
  );

  const setMusic = useSetRecoilState(MusicController.state.setMusic);
  const getMusic = useRecoilValue(MusicController.state.getMusic);

  const setFirstPlayTrack = useSetRecoilState(
    PlayerController.state.setFirstPlay
  );

  const getIsFirstPlayTrack = useRecoilValue(
    PlayerController.state.getIsFirstPlay
  );

  const setSelectedMusic = useSetRecoilState(
    MusicController.state.setSelectedMusic
  );

  const getSelectedMusic = useRecoilValue(
    MusicController.state.getSelectedMusic
  );

  const handleSearchQuery = useCallback(
    (event) => {
      if (event.target.value.length) {
        MusicController.hooks
          .searchMusic({
            access_token: accessToken,
            query: event.target.value,
            type: "track",
          })
          .then((res) => {
            setMusic(res?.tracks?.items);
          });
      }

      if (!event.target.value.length) {
        handleRecommendations();
      }
    },
    [accessToken, getMusic.length]
  );

  const handleRecommendations = useCallback(() => {
    // TODO Fix api call if user refreshs screen ( needs to verify if recommendations length already exists)
    if (isUserAuthenticated) {
      const getRecommendations = MusicController.hooks
        .recommendedMusics({
          access_token: accessToken,
          type: "tracks",
        })
        .then((res) => {
          setMusic(res?.items);
        });

      return getRecommendations;
    }
  }, [isUserAuthenticated]);

  const handleSelectedMusic = (musicTrack: {
    uri?: string;
    name?: string;
    image?: string;
  }) => {
    setSelectedMusic({
      uri: musicTrack.uri,
      name: musicTrack.name,
      image: musicTrack.image,
    });
  };

  const handlePlayTrack = useCallback(
    ({ device }) => {
      const playTrack = PlayerController.hooks
        .playTrack({
          device,
          access_token: accessToken,
          getSelectedMusic,
        })
        .then(() => {
          if (!getIsFirstPlayTrack) {
            setFirstPlayTrack(true);
          }
        });

      return playTrack;
    },
    [getSelectedMusic]
  );

  useEffect(() => {
    handleRecommendations();
  }, [isUserAuthenticated]);

  return (
    <>
      {isUserAuthenticated && (
        <AudioSection>
          <AudioSearchSection>
            <TextComponent text="Ready to play some music?" as="h4" size="xl" />
            <InputComponent
              search
              placeholder="Search"
              onChange={handleSearchQuery}
              variant="filled"
            />
          </AudioSearchSection>
          {getMusic.length && (
            <MusicSection
              items={getMusic}
              selectedTrack={handleSelectedMusic}
            />
          )}
          <PlayerSection
            showControls={getIsFirstPlayTrack}
            playTrack={handlePlayTrack}
            getAccessToken={accessToken}
          />
        </AudioSection>
      )}
    </>
  );
};
