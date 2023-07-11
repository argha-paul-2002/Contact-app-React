import React from 'react'
import user from "../images/user.png"

export default function ContactCard(props) {
    const {id,name,email} = props.contact;
  return (
    <div>
      <div className="item">
            <img src={user} alt="User" className="ui avatar image" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
    </div>
  )
}
