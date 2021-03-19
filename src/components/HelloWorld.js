import React from 'react';

class HelloWorld extends React.Component {
// state - the internal data store (object) of a component

// constructor - (this.state) - the way in which you 
// establish the internal state of the component OR the way in which you
// set the state for the component. Any data you put on (this.state) inside 
// of the constructor will be part of the component's state. Initialization.

// props - the data which is passed down to the child component
// from the parent component

// setState - components ability to modify its own internal state. The 
// signal to notify our app that some data has changed. Whenerver setState is called
// the virtual DOM re-renders.

// this is an example of a component with its own internal state
  constructor(props){
    super(props)
    this.state = {
      username: "dinosaure"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return(
      <div>
        Hello {this.state.username} <br />
        Change name:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    );
  }

}

export default HelloWorld;