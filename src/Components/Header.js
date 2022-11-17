import React from 'react'
import './Header.css'
const Header = ({ theme, toggleTheme }) => {
  const nav_links = [
    {
      path: '#home',
      display: 'Home',
    },
    {
      path: '#about',
      display: 'about',
    },

    {
      path: 'services',
      display: 'services',
    },
    {
      path: '#projects',
      display: 'projects',
    },
    {
      path: '#Blog',
      display: 'Blog',
    },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h2>Digency</h2>
          </div>

          {/* naviogation meny*/}
          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="menu_item">
                  <a href={item.path} className="menu_link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*   Light Mode  */}

          <div className="light_mode">
            <span onClick={toggleTheme}>
              {theme === 'light-theme' ? (
                <span>
                  <i className="ri-moon-line"></i>
                  Night Mode
                </span>
              ) : (
                <span>
                  <i class="ri-sun-line"></i>Light Mode
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
