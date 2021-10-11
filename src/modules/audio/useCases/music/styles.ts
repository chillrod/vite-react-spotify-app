import styled from "styled-components";

import { motion } from "framer-motion";

interface MusicCardProps {
  color?: string;
}

export const MusicList = styled.ul`
  display: flex;
  padding: 1.5em 0;

  overflow-y: auto;
  border-radius: 8px;
`;

export const MusicCard = styled(motion.li)<MusicCardProps>`
  display: grid;
  grid-template-rows: 2fr 1fr;

  cursor: pointer;

  height: 100%;
  min-width: 70vw;
  margin-right: 1.2em;

  list-style: none;
  border-radius: 5px;

  background: ${(props) =>
    props.color ? props.color : "var(--chakra-colors-gray-700)"};

  transition: background 2s ease-in-out;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  @media (min-width: 800px) {
    min-width: 20ch;
    height: 32ch;
  }

  h2 {
    margin-bottom: 0.5em;
    padding-right: 1em;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  img {
    border-radius: 2px;
    height: 100%;
    object-fit: contain;
    padding: 1em;
    pointer-events: none;
  }
`;

export const MusicCardData = styled.div`
  grid-row: 2;
  margin-left: 1em;
  padding: 1em 0;

  display: grid;
  flex-direction: column;
`;
