import React from "react";

import { Breeds } from "./Breeds";
import { Route } from "./Route";
import { Router } from "./Router";
import { Breed } from "./Breed";

export const App = () => {
  return (
    <Router>
      <Route path="/">
        <Breeds />
      </Route>
      <Route path="/breed">
        <Breed />
      </Route>
    </Router>
  );
};
