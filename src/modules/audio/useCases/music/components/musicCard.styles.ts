import styled from "styled-components";

import { motion } from "framer-motion";

interface MusicCardProps {
  color?: string;
  active?: boolean;
  behavior?: string;
}

export const MusicCard = styled(motion.li)<MusicCardProps>`
  cursor: pointer;
  margin-right: 1.2em;

  display: grid;
  grid-template-rows: 2fr 1fr;

  height: 32ch;
  width: 20ch;
  min-width: 20ch;
  min-height: 32ch;

  list-style: none;
  border-radius: 5px;

  opacity: ${(props) => (props.active ? "1" : "0.5")};

  opacity: ${(props) => (props.behavior === "Search" ? "1" : "")};

  background: ${(props) =>
    props.color ? props.color : "var(--chakra-colors-gray-700)"};

  transition: background 2s ease-in-out;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

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

export const MusicCardBadge = styled.div`
  margin-top: 0.5em;
`;
