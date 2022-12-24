import { Component } from "react";

class ComponentDidMount extends Component {
  state = {
    counter: 0,
    products: [],
    search: "",
  };

  componentDidMount() {
    this.onAPICall("");
  }

  onAPICall = (value) => {
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          products: data.products,
        });
      });
  };

  onSearch = (e) => {
    const { value } = e.target;
    onAPICall(value);
  };

  render() {
    const { counter, products, search } = this.state;
    console.log("Rendering");
    return (
      <>
        <div>
          <input value={search} onChange={this.onSearch} />
        </div>

        <div>
          {products.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </div>
      </>
    );
  }
}

export default ComponentDidMount;
