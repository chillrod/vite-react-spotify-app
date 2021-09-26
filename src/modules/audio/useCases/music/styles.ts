import styled from "styled-components";

export const MusicList = styled.ul`
  display: flex;

  overflow-y: auto;
  border-radius: 8px;
`;

export const MusicCard = styled.li`
  cursor: pointer;

  min-width: 70vw;
  height: 100%;

  list-style: none;
  border-radius: 8px;

  margin-bottom: 1em;
  margin-left: 1em;

  background: var(--chakra-colors-gray-600);
  transition: 250ms ease-in-out;

  &:hover {
    background: var(--chakra-colors-gray-700);
  }

  display: grid;
  grid-template-columns: 40% 60%;

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 8px;
  }
`;

export const MusicCardData = styled.div`
  justify-self: start;
  margin-left: 1em;
  padding: 1em 0;

  display: flex;
  flex-direction: column;
`;