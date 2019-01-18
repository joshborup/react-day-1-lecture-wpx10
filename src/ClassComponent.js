import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // this.state to show this is a stateful component
    this.state = {};
  }

  render() {
    return <div>this is my Class Component</div>;
  }
}
