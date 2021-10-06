import React from "react";

import { NavBar } from "./shared-components/UI/Navbar";
import { User } from "./modules/user";
import { Audio } from "./modules/audio";

export const App = () => {
  return (
    <div>
      <NavBar />
      <User />
      <Audio />
    </div>
  );
};

export default App;
