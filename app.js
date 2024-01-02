/*

const heading = React.createElement("h1", { id: "heading" }, "hamlo");

console.log(heading); // heading is an React Element
// react elements are js objects
// heading is an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// render converts heading object into h1 tap and put it in browser


*/

// nested elements

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hamlloooo"),
    React.createElement("h2", {}, "yooooo"),
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
