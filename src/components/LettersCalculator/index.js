// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onChangeInput = event => {
    const {value} = event.target
    console.log(value)

    this.setState({input: value})
  }

  render() {
    const {input} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="inputText">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input-text"
              value={input}
              id="inputText"
              onChange={this.onChangeInput}
            />
            <div className="count-container">
              <p className="count-text">No.of letters: {input.length}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
