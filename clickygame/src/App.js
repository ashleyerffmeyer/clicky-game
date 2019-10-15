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
    topScore: 0,
    message: "Click on any character to begin."
  };

  // When an image is clicked, the sanrio character is taken out of the array
  imageClick = event => {
    const currentFriend = event.target.alt;
    const friendAlreadyClicked =
      this.state.clickedFriends.indexOf(currentFriend) > -1;

    // If a character that has already been clicked and is clicked again, the game is reset and cards are reordered
    if (friendAlreadyClicked) {
      this.setState({
        friends: this.state.friends.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedFriends: [],
        score: 0,
        message: "You already clicked that! Game Over."
      });
    }
    // If an available friend is clicked, the score is increased by 1 and cards are reordered
    else {
      this.setState(
        {
          friends: this.state.friends.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedFriends: this.state.clickedFriends.concat(
            currentFriend
          ),
          score: this.state.score + 1,
          topScore: this.state.score,
          message: ""
        },

        // If all 9 friends are clicked without repetition, a congrats message pops up and the game resets        
        () => {
          if (this.state.score === 9) {
            this.setState({
              friends: this.state.friends.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedFriends: [],
              score: 0,
              topScore: 0,
              message: "Congratulations! You Win!"
            });
          }
        }
      );
    }
  };

  // Render components
  // Map over this.state.friends and render a SanrioCard component for each friend object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
        <Header />
        <Wrapper />
        {this.state.friends.map(friends => (
          <SanrioCard
            imageClick={this.imageClick}
            key={friends.id}
            id={friends.id}
            name={friends.name}
            image={friends.image}
          />
        ))}
      </div>
    );
  }
};

export default App;