import React from "react";

import { User } from "./modules/user";
import { Playlist } from "./modules/playlist";
import { NavBar } from "./shared-components/UI/Navbar";

export const App = () => {
  return (
    <div>
      <NavBar />
      <User />
      <Playlist />
    </div>
  );
};

export default App;
