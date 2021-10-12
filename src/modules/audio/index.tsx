import React, { useCallback, useEffect, useMemo } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { UserAuthController } from "../user/useCases/user-auth/controller";
import { MusicController } from "./useCases/music/controller";
import { PlayerController } from "./useCases/player/controller";
import { handleToggleActive } from "./useCases/music/hooks/handleToggleActive";
import { handleSelectedMusic } from "./useCases/music/hooks/handleSelectedMusic";

import { MusicSection } from "./useCases/music";
import { PlayerSection } from "./useCases/player";

import { AudioSection } from "./styles";

interface MusicTrackProps {
  uri?: string;
  name?: string;
  album?: {
    name?: string;
    images?: { url?: string; height?: number; width?: number }[];
    artists?: { name?: string };
  };
  artists?: { name: string };
  active?: boolean;
  duration_ms?: number;
}

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

  const selectedMusic = (musicTrack: MusicTrackProps) =>
    handleSelectedMusic(musicTrack, getPlayerQueue, setPlayerQueue);

  const toggleActive = (musicTrack: MusicTrackProps) =>
    handleToggleActive(musicTrack, getPlayerQueue, setPlayerQueue);

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
