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

  const setMusic = useSetRecoilState(MusicController.state.setMusic);
  const getMusic = useRecoilValue(MusicController.state.getMusic);

  const setPlayTrackFromApi = useSetRecoilState(
    PlayerController.state.setPlayTrackFromApi
  );

  const playTrackFromApi = useRecoilValue(
    PlayerController.state.getPlayTrackFromApi
  );

  const setSelectedMusic = useSetRecoilState(
    MusicController.state.setSelectedMusic
  );

  const getSelectedMusic = useRecoilValue(
    MusicController.state.getSelectedMusic
  );

  // const setPlayerQueue = useRecoilValue(PlayerController.state.setPlayerQueue);
  // const getPlayerQueue = useRecoilValue(PlayerController.state.getPlayerQueue);

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
      uri: musicTrack?.uri,
      name: musicTrack?.name,
      image: musicTrack?.image,
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
          if (!playTrackFromApi) {
            setPlayTrackFromApi(true);
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
        <>
          <AudioSection>
            {getMusic.length && (
              <MusicSection
                items={getMusic}
                selectedTrack={handleSelectedMusic}
              />
            )}
            <PlayerSection
              showControls={playTrackFromApi}
              playTrack={handlePlayTrack}
              getAccessToken={accessToken}
            />
          </AudioSection>
        </>
      )}
    </>
  );
};
