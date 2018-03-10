import React, { Component } from 'react'
import { transToKeyCode, eachCharCheckIsServerCode } from './utility'

class Translator extends Component {
  state = {
    userInput: ''
  }
  userInputOnChange = ({ target: { value } }) => {
    this.setState({ userInput: value })
  }
  get transToResult() {
    const { userInput } = this.state
    const eachKeys = userInput.split('')
    if (eachKeys.length === 0) return pug`h3(style={color: 'red'}) please keyin server code.` 
    if (!eachCharCheckIsServerCode(eachKeys) || eachKeys.length !== 3)
      return pug`h3(style={color: 'red'}) server code incorrect.`

    return pug`h3(style={color: 'blue', 'text-align': 'center'}) ${this.transServerCodeToIP(eachKeys)}`
  }
  transServerCodeToIP = charList => {
    const result = charList.map(char => {
      return (transToKeyCode(char) - 65)
    })
    return result.join('')
  }
  render() {
    const { userInput } = this.state
    return pug`
      div
        input(
          type="text"
          className="new-todo"
          placeholder="enter server code. ex: ABC"
          value=userInput
          onChange=this.userInputOnChange
        )
        ${this.transToResult}
    `
  }
}

export default Translator
