import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }

  handleOnChange = event => {
    console.log(event);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Todo"
          name="description"
          onChange={this.handleOnChange}
        />
        <button>Submit</button>
      </div>
    );
  }
}

export default Form;
