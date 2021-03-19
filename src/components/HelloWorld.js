import React from 'react';

class HelloWorld extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "dinosaure"
    }
  }

  render() {
    return(
      <div>
        Hello {this.state.username}
      </div>
    );
  }

}

export default HelloWorld;