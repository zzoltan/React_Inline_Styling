import React from "react";

function Heading() {
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

  return (
    <div className="heading" style={CustomColor}>
      {greetings}
    </div>
  );
}

export default Heading;
