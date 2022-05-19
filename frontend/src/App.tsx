import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Articles from "./pages/articles";

import PageLayout from "./pages/layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
