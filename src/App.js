import React, { Component } from "react";
import { Btn } from "./components/Btn/Btn";
import { Div } from "./components/Div/Div";
import { List } from "./components/List/List";
import { Title } from "./components/Title/Title";

/*
Test Cases:
1. No double values.
2. Does the strike through stays the same after other task getting deleted.
3. The completed tasks should stay striked out when others are deleted.

To Fix:
1. X mark gets strike through too.
3. Key is not needed.
4. 

*/

export default class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.add = this.add.bind(this);

    this.state = {
      input_value: null,
    };

    //console.log('consutructor - App');
  }

  add = () => {
    //console.log('Add - App');

    if (this.textInput.current == null || this.textInput.current.value === "" ) {
      alert("You must write something");
    } else {
      this.setState(() => ({
        input_value: this.textInput.current.value,
      }));
    }
  };

  render() {
    //console.log('render - App');
    return (
      <>
        <Div className="header">
          <Title text="My To Do List" />
          <input type="text" ref={this.textInput} test-enzyme={'input-task'} placeholder="New Task ..." ></input>
          <Btn onClick={this.add} className={"addBtn"} input_text={"Add"} enzyme_test={"add-button"} /> 
        </Div>

        <List newtask={this.state.input_value} />
      </>
    );
  }
}
