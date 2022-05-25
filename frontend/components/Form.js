import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
      const {question_text, true_answer_text, false_answer_text, value } = evt.target.value
     
    props.inputChange({question_text, true_answer_text, false_answer_text, value }) 
    console.log("EVT:", evt.target.value, value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.postQuiz()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" name="name" type="text" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
