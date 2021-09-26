import React, { useCallback, useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { UserAuthController } from "../user/useCases/user-auth/controller";
import { MusicController } from "./useCases/music/controller";

import { MusicSection } from "./useCases/music";

import { InputComponent } from "../../shared-components/UI/Input";
import { TextComponent } from "../../shared-components/UI/Text";

import { PlaylistSection, PlaylistSearchSection } from "./styles";

export const Playlist = () => {
  const isUserAuthenticated = useRecoilValue(
    UserAuthController.state.getIsUserAuthenticated
  );

  const setMusic = useSetRecoilState(MusicController.state.setMusic);
  const accessToken = useRecoilValue(UserAuthController.state.getToken);

  const getMusic = useRecoilValue(MusicController.state.getMusic);

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
        setMusic([]);
      }
    },
    [accessToken]
  );

  const handleRecommendations = useCallback(() => {
    const getRecommendations = MusicController.hooks
      .recommendedMusics({
        access_token: accessToken,
        type: "tracks",
      })
      .then((res) => {
        setMusic(res?.items);
      });

    return getRecommendations;
  }, [getMusic?.length]);

  useEffect(() => {
    handleRecommendations();
  }, [getMusic?.length]);

  return (
    <>
      {isUserAuthenticated && (
        <PlaylistSection>
          <TextComponent
            text="Hello, here's our recommendations"
            as="h3"
            size="xl"
          />
          <PlaylistSearchSection>
            <TextComponent
              text="Or you can search your favorites"
              as="p"
              size="sm"
            />
            <InputComponent
              placeholder="Search"
              onChange={handleSearchQuery}
              variant="filled"
            />
          </PlaylistSearchSection>
          {getMusic && <MusicSection items={getMusic} />}
        </PlaylistSection>
      )}
    </>
  );
};
