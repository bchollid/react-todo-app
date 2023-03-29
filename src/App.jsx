import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    this.state.list.push(this.state.text);
    this.setState(this.state.list)
  }
  render() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form onSubmit={this.onSubmit}>
      <input
      value = {this.state.text}
      onChange = {(e) => this.setState({text: (e.target.value)})}
       />
       <button type="submit">Add</button>
       </form>
      <ul>{this.state.list.map((item, idx) => {return <li key={item+idx}>{item}</li>})}</ul>
    </div>
  );
}
}

export default App;
