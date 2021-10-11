import React, { useCallback } from "react";

import debounce from "lodash.debounce";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { MusicController } from "../controller";

import { InputComponent } from "../../../../../shared-components/UI/Input";

import { TextComponent } from "../../../../../shared-components/UI/Text";

import { AudioSearchSection } from "./musicSearch.styles";

export const MusicSearch = ({ accessToken }: any) => {
  const setMusic = useSetRecoilState(MusicController.state.setMusic);

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
    },
    [accessToken, getMusic.length]
  );

  const searchDebouncer = debounce(handleSearchQuery, 700);

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
