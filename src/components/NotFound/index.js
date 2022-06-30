import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBgClass = isDarkTheme ? 'not-found-dark' : 'not-found-light'
      const notFoundDetails = isDarkTheme
        ? 'not-found-details-dark'
        : 'not-found-details-light'

      return (
        <div className="not-found-container">
          <Navbar />
          <div className={`not-found-content ${notFoundBgClass}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img-light"
            />
            <h1 className={`not-found-heading ${notFoundDetails}`}>
              Lost Your way?
            </h1>
            <p className={`not-found-description ${notFoundDetails}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
