import React, { useCallback } from "react";

import debounce from "lodash.debounce";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { MusicController } from "../controller";

import { AudioSearchSection } from "./musicSearch.styles";
import { InputComponent } from "../../../../../shared-components/UI/Input";
import { ButtonComponent } from "../../../../../shared-components/UI/Button";
import { parseSearchButton } from "../../../../../helpers/parseSearchButton";

export const MusicSearch = ({ accessToken }: any) => {
  const setSearchedMusic = useSetRecoilState(
    MusicController.state.setSearchedMusic
  );

  const setIsSerching = useSetRecoilState(MusicController.state.setIsSerching);
  const getIsSearching = useRecoilValue(MusicController.state.getIsSearching);

  const getSearchedMusic = useRecoilValue(
    MusicController.state.getSearchedMusic
  );

  const handleSearchQuery = useCallback(
    (event) => {
      if (event.target.value.length) {
        setIsSerching(true);

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

  const handleBackToQueue = () => {
    setIsSerching(!getIsSearching);
  };

  return (
    <AudioSearchSection>
      <InputComponent
        search
        placeholder="Search"
        onChange={searchDebouncer}
        variant="filled"
      />
      <ButtonComponent
        onClick={() => handleBackToQueue()}
        text={parseSearchButton(getIsSearching)}
      />
    </AudioSearchSection>
  );
};
