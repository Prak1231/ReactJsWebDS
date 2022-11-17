import React from 'react'
import '../Styles/Newsletter.css'
const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter_wrapper">
        <div className="newsletter_content">
          <h6 className="subtitle">Lets work</h6>
          <h2>
            Explore the <span className="hightlight">hidden</span>ideas and
            subscribe
          </h2>
        </div>
        <div className="newsletter_form">
          <input type="email" placeholder="email" />
          <button className="secondary_btn">Subscribe Now</button>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
