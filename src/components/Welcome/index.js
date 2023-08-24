// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    console.log(isSubscribed)
    let buttonText
    if (isSubscribed === true) {
      buttonText = 'Subscribe'
    } else {
      buttonText = 'Subscribed'
    }
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! happy learning</p>
          <div className="button-container">
            <button type="button" onClick={this.onSubscribe}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
