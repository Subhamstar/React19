import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {},
  "Hello from React JS"
);

const Title = () => (
  <h1 className="head">This is Title component ..</h1>
);

const HeadingComponent = () => (
  <div id="container">
    {heading}
    {/* <Title /> */}
    {Title()}
    <h1>Namaste React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<HeadingComponent />);