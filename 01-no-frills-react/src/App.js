const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella cheese, pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Spinach Pizza",
      description: "Mozzarella cheese, spinach",
    }),
    React.createElement(Pizza, {
      name: "The Mushroom Pizza",
      description: "Mozzarella cheese, mushrooms",
    }),
    React.createElement(Pizza, {
      name: "The Margarita Pizza",
      description: "Mozzarella cheese, tomatoes",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
