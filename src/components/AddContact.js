import React, { Component } from "react";

export class AddContact extends Component {

    state = {
        name: "",
        email: "",
      };

    add =(e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
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
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
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
