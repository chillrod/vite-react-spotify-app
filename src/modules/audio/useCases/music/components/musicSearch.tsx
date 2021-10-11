import React, { useCallback } from "react";

import debounce from "lodash.debounce";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { MusicController } from "../controller";

import { InputComponent } from "../../../../../shared-components/UI/Input";

import { AudioSearchSection } from "./musicSearch.styles";

export const MusicSearch = ({ accessToken }: any) => {
  const setSearchedMusic = useSetRecoilState(
    MusicController.state.setSearchedMusic
  );

  const getSearchedMusic = useRecoilValue(
    MusicController.state.getSearchedMusic
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
            setSearchedMusic(res?.tracks?.items);
          });
      }
    },
    [accessToken, getSearchedMusic.length]
  );

  const searchDebouncer = debounce(handleSearchQuery, 600);

  return (
    <AudioSearchSection>
      <InputComponent
        search
        placeholder="Search"
        onChange={searchDebouncer}
        variant="filled"
      />
    </AudioSearchSection>
  );
};
