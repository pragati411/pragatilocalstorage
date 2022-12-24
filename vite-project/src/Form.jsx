import { Component } from "react";
class Signup extends Component {
  state = {
    name: "",
    email: "",
    pass: "",
    textArea: "",
    rangeInput: "",
    myDate: "",
    choosenRadio1: "",
    dropDown: "",
    checkBox1: "",
    checkBox2: "",
  };
  render() {
    return (
      <>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="Email">Range</label>
          <input
            type={"range"}
            name={"email"}
            value={this.state.rangeInput}
            onChange={(e) => {
              this.setState({ rangeInput: e.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="TextArea">TextArea</label>
          <textarea
            name={"textarea"}
            rows={"4"}
            cols={"50"}
            value={this.state.textArea}
            onChange={(e) => {
              this.setState({ textArea: e.target.value });
            }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="Range">Range</label>
          <input
            type={"range"}
            name={"range"}
            value={this.state.rangeInput}
            onChange={(e) => {
              this.setState({ rangeInput: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="Date">Choose Date</label>
          <input
            type={"date"}
            name={"myDate"}
            value={this.state.myDate}
            onChange={(e) => {
              this.setState({ myDate: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <br />
          <label htmlFor="Male">Male</label>
          <input
            type={"radio"}
            name={"gender"}
            value={"Male"}
            // checked={this.state.choosenRadio==='male'}
            onChange={(e) => {
              this.setState({ choosenRadio: e.target.value });
            }}
          />
          <label htmlFor="Female">Female</label>
          <input
            type={"radio"}
            name={"gender"}
            value={"Female"}
            // checked={this.state.choosenRadio==='female'}
            onChange={(e) => {
              this.setState({ choosenRadio: e.target.value });
            }}
          />
        </div>
        <div>
          <select
            name={"dropdown"}
            onChange={(e) => {
              this.setState({ dropDown: e.target.value });
            }}
          >
            <option value={"First"}>First</option>
            <option value={"Second"} selected>
              Second
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="html">html</label>
          <input
            type={"checkbox"}
            name={"check1"}
            value={"html"}
            onChange={(e) => {
              this.setState({ checkBox1: e.target.value });
            }}
          />
          <label htmlFor="javascript">javascript</label>
          <input
            type={"checkbox"}
            name={"check2"}
            value={"javascript"}
            onChange={(e) => {
              this.setState({ checkBox2: e.target.value });
            }}
          />
        </div>
        <div>
          <p>Name:{this.state.name}</p>
          <p>Text-Area:{this.state.textArea}</p>
          <p>Range Value is:{this.state.rangeInput}</p>
          <p>Choosen Date:{this.state.myDate}</p>
          <p>Gender:{this.state.choosenRadio}</p>
          <p>Drowdown-Result:{this.state.dropDown}</p>
          <p>
            CheckBox Data:{this.state.checkBox1},{this.state.checkBox2}
          </p>
        </div>
      </>
    );
  }
}
export default Signup;
