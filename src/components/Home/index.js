import {Component} from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeImgUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

          const homeBgClass = isDarkTheme ? 'home-dark' : 'home-light'
          const homeHeadingClass = isDarkTheme
            ? 'home-heading-dark'
            : 'home-heading-light'
          return (
            <div>
              <Navbar />
              <div className={`home-content ${homeBgClass}`}>
                <img src={homeImgUrl} alt="home" className="home-img-light" />
                <h1 className={homeHeadingClass}>Home</h1>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
