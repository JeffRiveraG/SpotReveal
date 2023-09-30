import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyAuthenticated: false,
    };
    this.authenticateSpotify = this.authenticateSpotify.bind(this);
  }

  componentDidMount() {
    this.authenticateSpotify();
  }

  authenticateSpotify() {
    fetch("/spotify/is-authenticated")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ spotifyAuthenticated: data.status });
        console.log(data.status);
        if (!data.status) {
          this.redirectToSpotifyLogin();
        }
      })
      .catch((error) => {
        console.error("Error authenticating with Spotify:", error);
      });
  }

  redirectToSpotifyLogin() {
    fetch("/spotify/get-auth-url")
      .then((response) => response.json())
      .then((data) => {
        window.location.replace(data.url);
      })
      .catch((error) => {
        console.error("Error redirecting to Spotify login:", error);
      });
  }

  render() {
    return (
      <div>
        <h1>SpotReveal</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={this.authenticateSpotify}
        >
          Log in with Spotify
        </Button>
      </div>
    );
  }
}

export default Auth;
