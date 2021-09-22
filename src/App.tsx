import React from "react";

import { User } from "./modules/user";
import { NavBar } from "./shared-components/UI/Navbar";

export const App = () => {
  return (
    <div>
      <NavBar />
      <User />
    </div>
  );
};

export default App;
