import React, { Component } from "react";
import { render } from "react-dom";
import Auth from "./Auth"; // Import your authentication component

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Auth /> {/* Render your authentication component */}
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
