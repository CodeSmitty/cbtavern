import React from 'react'
import checkbg from '../images/checkbg.png'

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="checkbg-wrapper">
        {" "}
        <img className="checkbg" src={checkbg} />
      </div>
      <div className="welcome-message">
        <h1 className="welcome-h1">Welcom to the Checkboard Tavern</h1>
        <h3 className="welcome-h3">Great Food, Great Prices, Great Fun</h3>
        <p>
          {" "}
          We’re glad you’ve come to check out our home page. Here, you’ll find
          weekly specials for food and drink, our full menu, and our contact
          information. We can’t wait to serve you! Don’t forget to join us for
          weekly Trivia, and our live DJ on the weekends. Of course, since we’re
          a sports pub, we have all the games you want to see on our TVs that
          surround the bar, so you’ll never be too far from the action!
        </p>
      </div>
    </div>
  );
}

export default Homepage