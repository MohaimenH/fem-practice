import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";

import SearchParams from "./SearchParams";

// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
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
