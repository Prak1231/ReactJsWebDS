import React from 'react'
import '../Styles/Testimonial.css'

import ava01 from '../images/ava-1.jpg'
import Slider from 'react-slick'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section>
      <div className="container">
        <div className="slider_content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than <span className="hightlight">5,000</span>{' '}
            customers
          </h2>
        </div>

        <div className="slider_wrapper">
          <Slider>
            <div className="slider_item">
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur, modi perspiciatis eos possimus aut saepe labore?
                Exercitationem voluptatem fuga nobis.
              </p>
              <div className="customer_details">
                <div className="customer_img">
                  <img src={ava01} alt="" />
                </div>

                <div>
                  <h5 className="customer_name">Jhon Doe</h5>
                  <p className="description">CEO Workcreation </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
