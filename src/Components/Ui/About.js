import React from 'react'
import '../Styles/About.css'
import aboutImg from '../images/about-us.jpg'
const About = () => {
  const chooseData = [
    {
      icon: 'ri-wifi-line',
      title: 'First working process',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate!',
    },
    {
      icon: 'ri-team-line',
      title: 'Dedicated Team',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate!',
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Hours Support',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate!',
    },
  ]
  return (
    <section id="about">
      <div className="container">
        <div className="anout_wrapper">
          <div className="about_content">
            <h6 className="subtitle">Why Choose us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className="hightlight">Financial challenges </h2>
            <p className="description about_content_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              ut!
            </p>

            <div className="choose_item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose_us-item" key={index}>
                  <span className="choose_us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose_us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about_img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
