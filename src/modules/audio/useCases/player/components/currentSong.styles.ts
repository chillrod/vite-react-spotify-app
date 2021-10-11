import styled, { keyframes } from "styled-components";

import { SpotleafColors } from "../../../../../config/spotleaf/colors";

interface Props {
  spotleafPrimary?: string;
}

const pulse = keyframes`
  0% {
      transform: scale(0.95);
      opacity: .5;
    }

    70% {
      transform: scale(1.1);
      opacity: 1
    }

    100% {
      transform: scale(0.95);
      opacity: .5;
    }
`;

export const CurrentSongFrequency = styled.div<Props>`
  width: 20px;
  height: 20px;

  border-radius: 50%;

  background: ${(props) => props.spotleafPrimary};

  margin-right: 1em;

  animation: ${pulse} 2s infinite;
`;
