// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeTheCount = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    return this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="random-number-generator">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.changeTheCount}
            type="button"
            className="button"
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
