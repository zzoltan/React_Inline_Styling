//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const nap = new Date(2021, 1, 1, 14);
const ido = nap.getHours();
let greetings;
// creating a JavaScript object t apply for syling we have to create the oblject and apply this styling later in the <div> tag
const CustomColor = {
  color: " "
};

if (ido < 12) {
  greetings = "Good morning";
  CustomColor.color = "red";
} else {
  if (ido < 18) {
    greetings = "Good afernoon";
    CustomColor.color = "green";
  } else {
    greetings = "Good night";
    CustomColor.color = "blue";
  }
}

ReactDom.render(
  <div className="heading" style={CustomColor}>
    {greetings}
  </div>,
  document.getElementById("root")
);
