import React, { useCallback, useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { MusicTrackDTO } from "./dto";

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

  const getIsSearching = useRecoilValue(MusicController.state.getIsSearching);

  const setIsPlaying = useSetRecoilState(PlayerController.state.setIsPlaying);
  const getIsPlaying = useRecoilValue(PlayerController.state.getIsPlaying);

  const setPlayerQueue = useSetRecoilState(
    PlayerController.state.setPlayerQueue
  );
  const getPlayerQueue = useRecoilValue(PlayerController.state.getPlayerQueue);

  const setQueueOrder = useSetRecoilState(MusicController.state.setQueueOrder);
  const getQueueOrder = useRecoilValue(MusicController.state.getQueueOrder);

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

  const selectedMusic = (musicTrack: MusicTrackDTO) =>
    MusicController.hooks.handleSelectedMusic(
      musicTrack,
      getPlayerQueue,
      setPlayerQueue
    );

  const toggleActive = (musicTrack: MusicTrackDTO) =>
    MusicController.hooks.handleToggleActive(
      musicTrack,
      getPlayerQueue,
      setPlayerQueue,
      setQueueOrder
    );

  const handlePlayTrack = ({ device }: any) => {
    if (parseMusicList().MUSIC_SECTION_BEHVAVIOR === "Queue") {
      const filterActives = getPlayerQueue.filter(
        (playerQueue: { uri?: string; active?: boolean; img?: string }) =>
          playerQueue.active
      );

      const playTrack = PlayerController.hooks.playTrack({
        device,
        access_token: accessToken,
        filterActives: filterActives[1],
      });

      return playTrack;
    }
  };

  const parseMusicList = useCallback(() => {
    if (!getIsSearching) {
      return {
        MUSIC_SECTION_BEHVAVIOR: "Queue",
        items: getPlayerQueue.slice(1),
      };
    }

    return {
      MUSIC_SECTION_BEHVAVIOR: "Search",
      items: getSearchMusic,
    };
  }, [getIsSearching, getPlayerQueue, getSearchMusic]);

  useEffect(() => {
    handleRecommendations();
  }, [isUserAuthenticated]);

  return (
    <>
      {isUserAuthenticated && (
        <>
          <AudioSection>
            <MusicSection
              music={parseMusicList()}
              toggleActive={toggleActive}
              selectedTrack={selectedMusic}
              queueOrder={[getQueueOrder, setQueueOrder]}
            />
            <PlayerSection
              isPlaying={[getIsPlaying, setIsPlaying]}
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
