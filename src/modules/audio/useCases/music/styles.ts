import styled from "styled-components";
import { motion } from "framer-motion";

export const MusicList = styled.ul`
  display: flex;
  padding: 1.5em 0;

  overflow-y: auto;
  border-radius: 8px;
`;

export const MusicCard = styled(motion.li)`
  display: grid;
  grid-template-columns: 40% 60%;

  cursor: pointer;

  height: 100%;
  min-width: 70vw;
  margin-right: 1.2em;

  list-style: none;
  border-radius: 8px;

  background: var(--chakra-colors-gray-600);
  transition: 250ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    background: var(--chakra-colors-gray-700);
  }

  @media (min-width: 800px) {
    min-width: 30ch;
    height: 15ch;

    grid-template-columns: 1fr 1fr;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    pointer-events: none;
  }
`;

export const MusicCardData = styled.div`
  margin-left: 1em;
  padding: 1em 0;

  display: flex;
  flex-direction: column;
`;
