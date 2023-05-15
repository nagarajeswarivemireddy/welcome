// Write your code

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  changeButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thankyou!Happy Learning</p>
        {isClicked ? (
          <button className="button" type="button" onClick={this.changeButton}>
            Subscribed
          </button>
        ) : (
          <button className="button" type="button" onClick={this.changeButton}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
