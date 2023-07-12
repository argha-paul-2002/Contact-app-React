import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  console.log(props.contact);
  const { id, name, email } = props.contact;

  const dashboardData = {
    component: "Dashboard page",
    content: "Data is sent from profile component",
    timestamp: Date.now(),
  };
  return (
    <div>
      <div className="item">
        <img src={user} alt="User" className="ui avatar image" />
        <div className="content">
          <Link to={{ pathname: `contact/${id}`}} state={{data: props.contact}}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className="trash alternate outline icon red"
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
}
