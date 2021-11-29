import Loader from "react-loader-spinner";
import React, { Component } from "react";

class Loading extends Component {
  //other logic
  render() {
    return (
      <Loader type="TailSpin" color={this.props.color?this.props.color:"#000000"} height={this.props.size?this.props.size:30} width={this.props.size?this.props.size:30} />
    );
  }
}

export default Loading;
