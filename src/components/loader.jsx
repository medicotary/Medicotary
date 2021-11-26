import Loader from "react-loader-spinner";
import React, { Component } from "react";

class Loading extends Component {
  //other logic
  render() {
    return (
      <Loader type="TailSpin" color={this.props.color} height={25} width={25} />
    );
  }
}

export default Loading;
