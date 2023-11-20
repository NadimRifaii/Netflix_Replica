import { useState } from 'react'
import './question.styles.css'
const Question = ({ title: question, answer }) => {
  const [isActive, setIsActive] = useState(false)
  function toggleXSign() {
    setIsActive(!isActive)
  }
  return (
    <div onClick={toggleXSign} className="question-container">
      <div className="holder">
        <div className="question">{question}</div>
        <div className={`plus-sign ${isActive ? 'active' : ''}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`hidden-info ${isActive ? 'active' : ''}`}>
        <div className="hidden-info-holder">
          {answer}
        </div>
      </div>
    </div>
  )
}
export default Question