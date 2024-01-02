import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello"),
    React.createElement("h2", {}, "yoo"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "yoii"),
    React.createElement("h2", {}, "sup"),
  ]),
]);

console.log(parent); // is an object
// this object is react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// if root already have some tag before rendering parent then it will be replaced by parent
