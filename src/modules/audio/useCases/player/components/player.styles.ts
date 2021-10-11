import styled from "styled-components";

interface Props {
  spotleafPrimary?: string;
}

export const PlayTrackButton = styled.button<Props>`
  border-radius: 50%;
  background: var(--chakra-colors-gray-900);

  height: 4em;
  width: 4em;

  display: grid;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  svg {
    justify-self: center;
    align-self: center;
    color: ${(props) => props.spotleafPrimary};
  }
`;
