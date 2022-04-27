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
      <section className="product-section">
        <div>
          <h2>Live Dj</h2>
          <p>
            Each Week, we feature a Live DJ, to help you unwind from the work
            grind with your favorite music tracks.
          </p>
        </div>
        <div>
          <h2><a href="">Full Menu</a></h2>
          <p>
            Our menu choices are truly second to none. Stop in and experience
            them for yourself!
          </p>
        </div>
        <div>
          <h2>Full Bar Experience</h2>
          <p>
            Our bar staff is ready to serve your favorite beer or cocktail to
            help you relax, whether with friends or a quiet drink alone to
            unwind.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Homepage