import React, { useState, useEffect, Component } from "react";
import myText from "./myText.json";
import "../App.css";

function HighlightP(sentence, index) {
  switch (sentence["sentiment"]) {
    case "positive":
      return (
        <p
          key={index}
          className = "positiveStyle"
        >
          {sentence["sentence"]}
        </p>
      );
    case "negative":
      return (
        <p key={index} style={{
            backgroundColor: "blue",
            width: "fixed",
            height: "fixed",
          }}>
          {sentence["sentence"]}
        </p>
      );
    default:
      return (
        <p key={index} className="normalBackground">
          {sentence["sentence"]}
        </p>
      );
  }
}
function Transcript(props) {
  return (
    <div>{myText.map((sentence, index) => HighlightP(sentence, index))}</div>
  );
}

export default Transcript;
