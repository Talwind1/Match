import React, { Component } from "react";
import Likes from "./Likes";
import Button from "./Button";
import Movies from "./Movies";

export default class Match extends Component {
  state = {
    movie: 0,
    likes: 0,
    dislikes: 0,
  };

  changeCounter(addFac) {
    if (addFac === 1) {
      this.setState({ likes: this.state.likes + 1 });
    } else {
      //  if (addFac === -1)
      this.setState({ dislikes: this.state.dislikes + 1 });
    }
    this.setState({ movie: (this.state.movie + 1) % 5 });
  }

  render() {
    return (
      <div className="match">
        <div className="buttons">
          <Likes type="like" counter={this.state.likes} />
          <Likes type="dislike" counter={this.state.dislikes} />
        </div>
        <>
          <Movies idx={this.state.movie} />
        </>
        <div className="buttons">
          <Button
            type="up"
            onHandleClick={() => {
              this.changeCounter(1);
            }}
          />
          <Button
            type="down"
            onHandleClick={() => {
              this.changeCounter(-1);
            }}
          />
        </div>
      </div>
    );
  }
}
