import React from 'react'
import checkbg from '../images/checkbg.png'
import wingPlatter from "../images/wingPlatter.png"
import barTap from '../images/barTap.png'

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="checkbg-wrapper">
        {" "}
        <img className="checkbg" src={checkbg} />
      </div>
      <div className="welcome-message">
        <h1 className="welcome-h1">Welcome to the Checkboard Tavern</h1>
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
          <h2 className="product-section-title">Live Dj</h2>
          <p>
            Each Week, we feature a Live DJ, to help you unwind from the work
            grind with your favorite music tracks.
          </p>
        </div>
        <div>
          <h2 className="product-section-title">
            <a href="/menu">Full Menu</a>
          </h2>
          <p>
            Our menu choices are truly second to none. Stop in and experience
            them for yourself!
          </p>
        </div>
        <div>
          <h2 className="product-section-title">Full Bar Experience</h2>
          <p>
            Our bar staff is ready to serve your favorite beer or cocktail to
            help you relax, whether with friends or a quiet drink alone to
            unwind.
          </p>
        </div>
      </section>

      <section className="selection-section">
        <div className="selection-child selection-content">
          <h3 className="selection-content-title">
            Our Menu Is Full Of Great Selections
          </h3>
          <hr />
          <p className="selection-content-content">
            When you’re ready to order your favorites, we’ve got you covered.
            Delicious salads, tantalizing appetizers, mouth-watering main
            dishes, no matter what you want, we’ve got the food you crave!
          </p>
        </div>
        <div className="selection-child selection-img">
          <img src={wingPlatter} />
        </div>
      </section>

      <section className="choose-section">
        <div className="choose-child choose-content">
          <h3 className="choose-title">Why Choose Us?</h3>
          <hr />
          <p className="choose-content-content">
            For years, we have been a popular hangout spot in Lafayette. Some
            may even call us the best kept secret in town. We have held to a
            couple ideas since we opened; serve great food and drinks, and
            provide entertainment for our customers that is second to none. We
            know when you stop in, you'll agree that we cover both bases quite
            well. Come see for yourself!
          </p>
        </div>
        <div className="choose-child choose-img-container">
          <img className="choose-img" src={barTap} />
        </div>
      </section>
    </div>
  );
}

export default Homepage