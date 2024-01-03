import React from "react";
import ReactDOM from "react-dom/client";

//  using jsx

// jsx => babel to  React.createElement => Object => render => HTMLElement

//react element

const ex = <span>element</span>;

const jsxHeading = (
  <h1 className="head" id="head">
    {/* element inside element */}
    {ex}
    jsx heading
  </h1>
);

// React component
// => class based component
// => functional component

// React functional component

// const HeadingComponent = () => {
//   return <h1>hello world</h1>;
// };

// const HeadingComponent2 = () => <h1 className="header">hello world</h1>;

const Title = () => (
  <h1 className="title" id="title">
    Title
  </h1>
);
const number = 1000;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <Title></Title>

    {number}
    <h1>{number * 2}</h1>
    {/* react element in functional component */}
    {jsxHeading}
    <h1 className="header" id="heading">
      hello world
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
