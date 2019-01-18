import React, { Component } from "react";
import MyComponent from "./MyComponent";
import ClassComponent from "./ClassComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      picture: ""
    };
  }

  updatePicture(value) {
    this.setState({
      picture: value
    });
  }

  updateName(value) {
    this.setState({
      name: value
    });
  }

  addFriend() {
    const { name, picture, friends } = this.state;

    let newFriends = friends.slice();
    newFriends.push({ name: name, picture: picture });
    this.setState({
      name: "",
      picture: "",
      friends: newFriends
    });
  }

  render() {
    //destructure the properties out of state to have easier access
    const { picture, name, friends } = this.state;

    //map over friends list and wrap data with JSX tags so we can properly display the data we want
    const mappedFriends = friends.map(friend => {
      return (
        //you must always have a unique key for each item when mapping over an array
        <div
          key={friend.name}
          style={friend.name === "josh" ? { background: "red" } : null}
        >
          <span>{friend.name}</span>
          <img src={friend.picture} />
        </div>
      );
    });
    return (
      //this will allow you to add friends just by pressing the enter key. this was put on the most parent element so that no matter where enter is pressed, the event will always run
      <div
        onKeyPress={e => {
          if (e.key === "Enter") {
            this.addFriend();
          }
        }}
      >
        {/* adding a label to an input and linking it to the input with the htmlFor attribute is best practice for inputs */}
        <label htmlFor="Picture">Picture: </label>
        <input
          id="Picture"
          onChange={e => {
            let { value } = e.target;
            this.updatePicture(value);
          }}
          value={picture}
        />

        <label htmlFor="Name">Name: </label>
        <input
          id="Name"
          onChange={e => {
            // each time a letter is typed, an on change event with the value that was typed get sent to out invoked updateName function
            this.updateName(e.target.value);
          }}
          value={name}
        />

        <button onClick={() => this.addFriend()}>Add Friend</button>
        {/* mapped over array  */}
        {mappedFriends}
        {/* components are key in react, they allow us to reuse components over an over, this allows for extremly dry code */}
        <ClassComponent />
        <ClassComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
      </div>
    );
  }
}
// only 1 export default, otherwise you will have to desc
export default App;
