import React from 'react'
import '../Footer/footer.css'
const Footer = () => {
  const quickLinks01 = [
    {
      path: '#',
      display: 'Marketing',
    },
    {
      path: '#',
      display: 'Analytics',
    },
    {
      path: '#',
      display: 'Commerce',
    },
  ]

  const date = new Date().getFullYear()

  const quickLinks02 = [
    {
      path: '#',
      display: 'Pricing',
    },
    {
      path: '#',
      display: 'Documention',
    },
    {
      path: '#',
      display: 'Guides',
    },
  ]

  const quickLinks03 = [
    {
      path: '#',
      display: 'About',
    },
    {
      path: '#',
      display: 'job',
    },
    {
      path: '#Blog',
      display: 'Blogs',
    },
  ]
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2>Digency</h2>
            <p className="description">Gro with us</p>
            <p className="small_text description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et
              quas placeat commodi nesciunt qui!
            </p>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Support</h3>
            <ul className="quick_links">
              {quickLinks03.map((item, index) => (
                <li className="quick_link-item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Company</h3>
            <ul className="quick_links">
              {quickLinks02.map((item, index) => (
                <li className="quick_link-item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Solution</h3>
            <ul className="quick_links">
              {quickLinks01.map((item, index) => (
                <li className="quick_link-item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          {' '}
          Copyright {date}, developed by Prakash, all rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
