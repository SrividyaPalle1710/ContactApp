import React, { useState } from "react";

const AddContact = (props) =>
{

    const [state, setState] = useState({
        name: "",
        email: "",
    }
    )

    const add = () =>
    {
        // e.preventDefault();
        if (state.name === "" || state.email === "")
        {
            alert("All fields are mandatory");
            return;
        }
        props.addContactHandler(state);
        setState({ name: "", email: "" });
        // props.history.push("/");
        console.log(state);
    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add()}>
                <div className="field">
                    <label>Name</label>
                    <input type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text"
                        name="Email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <button className="ui button blue"> Add </button>
            </form>
        </div >
    )
}

export default AddContact;