// importing the libraries and components
import React from "react";
import  ReactDOM  from "react-dom/client";
import MyApp from "./App"

// getting a reference to the div eith ID root
const main = document.getElementById("root");

// telling react to take control of that element
const root = ReactDOM.createRoot(main);


// showing the component on the screen
root.render(<MyApp/>);