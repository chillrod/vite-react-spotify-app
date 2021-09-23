import React, { useCallback, useState } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { UserAuthController } from "../user/useCases/user-auth/controller";
import { SearchController } from "./useCases/search/controller";

import { SearchSection } from "./useCases/search";

import { InputComponent } from "../../shared-components/UI/Input";
import { PlaylistSection } from "./styles";

export const Playlist = () => {
  const isUserAuthenticated = useRecoilValue(
    UserAuthController.state.getIsUserAuthenticated
  );

  const setSearchedMusic = useSetRecoilState(
    SearchController.state.setSearchedMusic
  );
  const accessToken = useRecoilValue(UserAuthController.state.getToken);

  const getSearchedMusic = useRecoilValue(
    SearchController.state.getSearchedMusic
  );

  const handleSearchQuery = useCallback(
    (event) => {
      if (event.target.value.length) {
        SearchController.hooks
          .searchMusic({
            access_token: accessToken,
            query: event.target.value,
            type: "track",
          })
          .then((res) => {
            setSearchedMusic(res?.tracks?.items);
          });
      }

      if (!event.target.value.length) {
        setSearchedMusic([]);
      }
    },
    [accessToken]
  );

  return (
    <>
      {isUserAuthenticated && (
        <PlaylistSection>
          <InputComponent
            placeholder="search your favorite song"
            onChange={handleSearchQuery}
          />
          {getSearchedMusic && <SearchSection items={getSearchedMusic} />}
        </PlaylistSection>
      )}
    </>
  );
};
