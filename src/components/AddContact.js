import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

export class AddContact extends Component {

    state = {
        id: uuidv4(),
        name: "",
        email: "",
      };

    add =(e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.add}>
          <h2>Add Contacts</h2>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ 
                    name: e.target.value ,
                    id: uuidv4()
                })
            }}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
