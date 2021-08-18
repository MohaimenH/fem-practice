import { StrictMode, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
// import Pet from "./Pet";

const App = () => {
  const theme = useState("blue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

{
  /* <Pet name="Luna" animal="Dog" breed="Havanese" />
<Pet name="Pepper" animal="Bird" breed="Cockatiel" />
<Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" /> */
}
