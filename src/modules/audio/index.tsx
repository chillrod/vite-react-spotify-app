import React, { useCallback, useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { UserAuthController } from "../user/useCases/user-auth/controller";
import { MusicController } from "./useCases/music/controller";
import { PlayerController } from "./useCases/player/controller";

import { MusicSection } from "./useCases/music";
import { PlayerSection } from "./useCases/player";

import { AudioSection } from "./styles";

export const Audio = () => {
  const accessToken = useRecoilValue(UserAuthController.state.getToken);

  const isUserAuthenticated = useRecoilValue(
    UserAuthController.state.getIsUserAuthenticated
  );

  const setSearchMusic = useSetRecoilState(
    MusicController.state.setSearchedMusic
  );

  const getSearchMusic = useRecoilValue(MusicController.state.getSearchedMusic);

  // const setSelectedMusic = useSetRecoilState(
  //   MusicController.state.setSelectedMusic
  // );

  // const getSelectedMusic = useRecoilValue(
  //   MusicController.state.getSelectedMusic
  // );

  const setIsPlaying = useSetRecoilState(PlayerController.state.setIsPlaying);

  const setPlayerQueue = useSetRecoilState(
    PlayerController.state.setPlayerQueue
  );

  const getPlayerQueue = useRecoilValue(PlayerController.state.getPlayerQueue);

  const handleRecommendations = useCallback(() => {
    // TODO Fix api call if user refreshs screen ( needs to verify if recommendations length already exists)
    if (isUserAuthenticated) {
      const getRecommendations = MusicController.hooks
        .recommendedMusics({
          access_token: accessToken,
          type: "tracks",
        })
        .then((res) => {
          setSearchMusic(res?.items);
        });

      return getRecommendations;
    }
  }, [isUserAuthenticated]);

  const handleSelectedMusic = (musicTrack: {
    uri?: string;
    name?: string;
    image?: string;
    active?: boolean;
    duration_ms?: number;
  }) => {
    setPlayerQueue((oldState) => [...oldState, musicTrack]);
    // setSelectedMusic({
    //   uri: musicTrack?.uri,
    //   name: musicTrack?.name,
    //   image: musicTrack?.image,
    // });
  };

  const handlePlayTrack = useCallback(
    ({ device }) => {
      const filterActives = getPlayerQueue.filter(
        (playerQueue) => playerQueue.active
      );

      const playTrack = PlayerController.hooks.playTrack({
        device,
        access_token: accessToken,
        filterActives: filterActives[0],
      });

      return playTrack;
    },
    [getPlayerQueue]
  );

  useEffect(() => {
    handleRecommendations();
  }, [isUserAuthenticated]);

  return (
    <>
      {isUserAuthenticated && (
        <>
          <AudioSection>
            <MusicSection
              items={getSearchMusic}
              selectedTrack={handleSelectedMusic}
            />
            <PlayerSection
              isPlaying={setIsPlaying}
              playTrack={handlePlayTrack}
              queueChanged={getPlayerQueue}
              getAccessToken={accessToken}
            />
          </AudioSection>
        </>
      )}
    </>
  );
};
