import React from 'react'
import '../Styles/Counter.css'
const Counter = () => {
  const counterDate = [
    {
      number: '5k',
      text: 'Clients',
    },
    {
      number: '350+',
      text: 'Prunning Projects',
    },
    {
      number: '900+',
      text: 'Projects Completed ',
    },
  ]
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter_wrapper">
          {counterDate.map((item, index) => (
            <div className="counter_item" key={index}>
              <h3 className="counter_number">{item.number}</h3>
              <h4 className="counter_title">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
