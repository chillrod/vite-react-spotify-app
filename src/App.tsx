import React from "react";

import { UserContent } from "./modules/user-content";
import { NavBar } from "./shared-components/UI/Navbar";

export const App = () => {
  return (
    <div>
      <NavBar />
      <UserContent />
    </div>
  );
};

export default App;
