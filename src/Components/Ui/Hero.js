import React from 'react'

import '../Styles/Hero.css'
import heroDarkImg from '../images/hero-img.png'
import lightImg from '../images/light-hero-bg.jpg'
const Hero = ({ theme }) => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero_content">
            <div>
              <h2>We re creating Perfect </h2>
              <h2>Digital Prodyucts To</h2>
              <h2 className="heightlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, amet.
            </p>

            <div className="hero_btns">
              <button className="primary_btn">Get Started Now</button>
              <button className="secondary_btn">Discover More</button>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={theme === 'light-theme' ? lightImg : heroDarkImg}
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
