import "./Styles/slider.scss";
import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        img: "../Images/slider/0.jpg",
        text: "kurwa",
      },
      {
        img: "../Images/slider/1.jpg",
        text: "dziwka",
      },
      {
        img: "../Images/slider/2.jpg",
        text: "chuj",
      },
      {
        img: "../Images/slider/3.jpg",
        text: "szmata",
      },
      {
        img: "../Images/slider/4.jpg",
        text: "cipsko",
      },
    ];
  }
  render() {
    return (
      <div className="carousel">
        <div className="slider"></div>
      </div>
    );
  }
}
