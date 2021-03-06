import React from "react";

import { NavBar } from "./shared-components/UI/Navbar";
import { User } from "./modules/user";
import { Audio } from "./modules/audio";

export const App = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <NavBar />
      <User />
      <Audio />
    </div>
  );
};

export default App;
