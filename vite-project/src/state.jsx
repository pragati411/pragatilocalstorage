import { Component } from "react";

class C1 extends Component {
  state = {
    Counter: 0,
  };

  handleOnClick = () => {
    this.setState({
      Counter: this.state.Counter + 1,
    });
    console.log(this.state.Counter);
    this.setState({
      Counter: this.state.Counter + 1,
    });
    console.log(this.state.Counter);
    this.setState({
      Counter: this.state.Counter + 1,
    });
    console.log(this.state.Counter);
    // this.setState((prevState) => {
    //   return {
    //     Counter: prevState.Counter + 1,
    //   };
    // });
    // this.setState((prevState) => {
    //   return {
    //     Counter: prevState.Counter + 1,
    //   };
    // });
    // this.setState((prevState) => {
    //   return {
    //     Counter: prevState.Counter + 1,
    //   };
    // });
  };
  render() {
    const { Counter } = this.state;
    return (
      <div>
        <p>Counter: {Counter}</p>
        <button onClick={this.handleOnClick}>Increment</button>
      </div>
    );
  }
}

export default C1;
