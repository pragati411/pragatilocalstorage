import { Component } from "react";
class Logup extends Component {
  state = {
    name: "",
    pass: "",
    textArea: "",
  };

  _handleInputChangeV1 = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  _handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log("this is inside", this.state[name]);
      }
    );
    console.log("this is outside", this.state[name]);
  };

  render() {
    const { name, pass, textArea } = this.state; // this is destructring
    return (
      <>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            value={name}
            name="name"
            onChange={(e) => {
              this._handleInputChangeV1("name", e.target.value);
              console.log();
            }}
          />
        </div>

        <div>
          <label htmlFor="pass">Pass</label>
          <input
            type="password"
            value={pass}
            name="pass"
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="TextArea">TextArea</label>
          <textarea
            name={"textArea"}
            rows={"4"}
            cols={"10"}
            value={textArea}
            onChange={this._handleInputChange}
          ></textarea>
        </div>

        <div>
          <p>Name:{name}</p>
          <p>Text-Area:{textArea}</p>
          <p>Pass:{pass}</p>
        </div>
      </>
    );
  }
}
export default Logup;
