import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SanrioCard from "./components/SanrioCard";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array and state to 0 or empty
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    highScore: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Header />
        <Wrapper />
        {this.state.friends.map(friend => (
          <SanrioCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}

          />
        ))}
      </div>


    );
  }
}

export default App;

