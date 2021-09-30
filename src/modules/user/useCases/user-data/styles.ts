import styled from "styled-components";

import { motion } from "framer-motion";

export const UserContainer = styled(motion.section)`
  padding: 1em;
  background: var(--chakra-colors-blue-800);
  border-radius: 10px;

  display: flex;
  align-items: center;

  box-shadow: rgba(149, 157, 165, 0.03) 0px 8px 24px;

  transition: 250ms ease-in-out;

  p {
    margin-left: 1em;
  }
`;
