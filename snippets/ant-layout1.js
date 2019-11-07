import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button, Popover } from "antd";

const buttonWidth = "20%";
const buttonHeight = 30;

const style = {
  buttonStyle: {
    width: "100%",
    height: buttonHeight,
    textAlign: "center",
    backgroundColor: "blue",
    color: "white"
  },
  mainStyle: {
    backgroundColor: "orange",
    float: "left",
    width: "60%",
    height: 3 * buttonHeight
  }
};

const renderButton = (label, middle) => {
  let buttonStyle = { ...style.buttonStyle };
  if (middle) {
    buttonStyle.width = "33.3%";
  }
  return (
    <Popover content={<div>Button Label: {label}</div>} title="Button">
      <Button style={buttonStyle}>{label}</Button>
    </Popover>
  );
};

ReactDOM.render(
  <div width="100%">
    <div style={{ marginLeft: buttonWidth, width: "60%" }}>
      {renderButton("TL", true)}
      {renderButton("Top", true)}
      {renderButton("TR", true)}
    </div>
    <div style={{ width: buttonWidth, float: "left" }}>
      {renderButton("LT")}
      {renderButton("Left")}
      {renderButton("LB")}
    </div>
    <div style={style.mainStyle} />
    <div style={{ width: buttonWidth, float: "right" }}>
      {renderButton("RT")}
      {renderButton("Right")}
      {renderButton("RB")}
    </div>
    <div style={{ marginLeft: buttonWidth, width: "60%" }}>
      {renderButton("BL", true)}
      {renderButton("Bottom", true)}
      {renderButton("BR", true)}
    </div>
  </div>,
  document.getElementById("container")
);
