import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {toggleTheme, isDarkTheme} = value
          const onClickingThemeBtn = () => {
            toggleTheme()
          }
          const themeUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

          const navLinkClass = isDarkTheme ? 'navlink-dark' : 'navlink-light'

          const navbarBgClass = isDarkTheme ? 'navbar-dark' : 'navbar-light'

          return (
            <nav className={`navbar ${navbarBgClass}`}>
              <img
                src={logoUrl}
                alt="website logo"
                className="logo-img-light"
              />
              <ul className="list-container">
                <li className="home-btn">
                  <Link to="/" className={`link ${navLinkClass}`}>
                    Home
                  </Link>
                </li>
                <li className="home-btn">
                  <Link to="/about" className={`link ${navLinkClass}`}>
                    About
                  </Link>
                </li>
              </ul>
              <button
                className="button"
                type="button"
                testid="theme"
                onClick={onClickingThemeBtn}
              >
                <img src={themeUrl} alt="theme" className="theme-img-dark" />
              </button>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
