import {Component} from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeImgUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

          const aboutBgClass = isDarkTheme ? 'about-dark' : 'about-light'
          const aboutHeadingClass = isDarkTheme
            ? 'about-heading-dark'
            : 'about-heading-light'
          return (
            <div>
              <Navbar />
              <div className={`about-content ${aboutBgClass}`}>
                <img src={homeImgUrl} alt="about" className="about-img-light" />
                <h1 className={aboutHeadingClass}>About</h1>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
