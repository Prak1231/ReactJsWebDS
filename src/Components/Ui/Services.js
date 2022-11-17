import React from 'react'
import '../Styles/Services.css'
const Services = () => {
  const serviceData = [
    {
      icon: 'ri-apps-line',
      title: 'App Development',
      desc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elSapiente pariatur alias illo quisquam voluptatum, accusantium odio quibusdam sunt in fugit!',
    },

    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      desc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elSapiente pariatur alias illo quisquam voluptatum, accusantium odio quibusdam sunt in fugit!',
    },

    {
      icon: 'ri-landscape-line',
      title: 'Graphics Design',
      desc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elSapiente pariatur alias illo quisquam voluptatum, accusantium odio quibusdam sunt in fugit!',
    },

    {
      icon: 'ri-rocket-line',
      title: 'Digital Marketing',
      desc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elSapiente pariatur alias illo quisquam voluptatum, accusantium odio quibusdam sunt in fugit!',
    },
  ]
  return (
    <section id="services">
      <div className="container">
        <div className="service_top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business</h2>
          <h2 className="hightlight">our best services</h2>
        </div>

        <div className="service_item-wrapper">
          {serviceData.map((item, index) => (
            <div className="service_item">
              <span className="service_icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
