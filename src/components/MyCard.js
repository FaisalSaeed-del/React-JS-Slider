import React from "react";
import "./MyCard.css";
const MyCard = (props) => {
  return <div className="mycard">MyCard No.{props.cardno}</div>;
};

export default MyCard;
