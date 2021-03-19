// functional component
// import React from "react";

// function Navbar() {
//   return(
//     <h1>HEY</h1>
//   );
// }
// export default Navbar;


// class component
import React, { Component } from "react";

class Navbar extends Component {
  // rendor method is called
  // rendor method escribes what the UI will look like for a particular component
  render() {
    // return statement returns navbar in h1 tag
    return(
      <div>
        <h1>Navbar </h1>
      </div>
    );
  }

}
export default Navbar;