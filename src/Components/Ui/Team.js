import React from 'react'
import '../Styles/Team.css'
import team01 from '../images/team-01.png'
import team02 from '../images/team-02.png'

import team03 from '../images/team-03.png'

import team04 from '../images/team-04.png'

const Team = () => {
  const teamMember = [
    {
      imgUrl: team01,
      name: 'Country Hurry',
      position: 'Product developer',
    },
    {
      imgUrl: team02,
      name: 'Lindas Walton',
      position: 'Front-End developer',
    },
    {
      imgUrl: team03,
      name: 'Harry Martin',
      position: 'Product Designer',
    },
    {
      imgUrl: team04,
      name: 'Jhon Copper',
      position: 'CEO & Sr. Developer',
    },
  ]
  return (
    <section className="our_team">
      <div className="container">
        <div className="team_content">
          <h2 className="subtitle">Our Team</h2>
          <h2>
            Meet with <span className="hightlight">Our team</span>
          </h2>
        </div>
        <div className="team_wrapper">
          {teamMember.map((item, index) => (
            <div className="team_item" key={index}>
              <div className="team_img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team_details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team_member-social">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span>
                    {' '}
                    <i class="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
