import styled from "styled-components";

export const NavBarContainer = styled.nav`
  padding: 1em;
  margin-bottom: 1em;

  display: grid;
  grid-template-columns: 2fr 75%;
  gap: 0.5em;
  align-items: center;
`;

export const NavBarLogo = styled.img`
  width: 170px;
`;

export const NavBarInsideLogo = styled.img`
  width: 50px;
`;

export const NavBarMusicContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1em;
  align-items: center;

  @media (orientation: portrait) {
    display: none;
  }
`;
