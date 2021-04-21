/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let total;

  pronoun.forEach(function(elementP) {
    adj.forEach(function(elementA) {
      noun.forEach(function(elementN) {
        console.log(elementP + elementA + elementN + ".com");
        total = [];
      });
    });
  });
};
