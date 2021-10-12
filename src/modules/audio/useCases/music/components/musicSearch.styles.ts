import styled from "styled-components";

export const AudioSearchSection = styled.div`
  display: grid;
  justify-content: end;
  align-items: center;
  gap: 0.5em;

  @media (min-width: 800px) {
    grid-template-columns: 3fr 1fr;
  }

  .ui-button {
    display: grid;

    button {
      justify-self: end;
      background: var(--chakra-colors-gray-600);
    }
  }
`;
