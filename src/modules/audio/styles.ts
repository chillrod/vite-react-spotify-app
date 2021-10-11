import styled from "styled-components";

export const AudioFallbackSection = styled.section`
  padding: 0 1em;

  @media (orientation: landscape) {
    p {
      display: none;
    }
  }
`;

export const AudioSection = styled.section`
  padding: 0 1em;

  @media (orientation: portrait) {
    display: none;
  }
`;
