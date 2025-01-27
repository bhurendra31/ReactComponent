import React, { Component } from 'react';
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { Demo: "God is Great..!!" };
  }

  componentDidMount() {
    alert("componentDidMount() Called.");
  }

  changeState() {
    this.setState({ Demo: "Time is Money..!!" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Demo}</h1>
        <h2>
          <button onClick={this.changeState.bind(this)}>Click Me To Change</button>
        </h2>
      </div>
    );
  }
}