// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    value: true,
  }

  click = () => {
    this.setState({value: false})
  }
  render() {
    let {value} = this.state
    let {resources} = this.props
    let {emojis, loveEmojiUrl} = resources

    return (
      <div className="container">
        {value ? (
          <div className="card">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul className="emj">
              {emojis.map(each => {
                return (
                  <li key={each.id}>
                    <img
                      onClick={this.click}
                      src={each.imageUrl}
                      alt={each.name}
                    />
                    <h1>{each.name}</h1>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          <div className="card">
            <ul>
              <li>
                <img src={loveEmojiUrl} />  
                <h1>
                  <img src={loveEmojiUrl} alt="love emoji" />
                  <h1>Thank You</h1>
                  <p>
                    We will you use feedback to imporve our Customer support
                    performance
                  </p>
                </h1>
                <p>
                  We will you use feedback to imporve our Customer support
                  performance
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
