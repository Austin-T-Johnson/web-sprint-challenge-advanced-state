import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {


    console.log("STATE:", props.form)

    


    const onInputChange = evt => {
        props.form.newQuestion = evt.target.value
        props.inputChange(newQuestion)
    }

    const onTaChange = evt => {
        props.form.newTrueAnswer = evt.target.value
        props.inputChange(newTrueAnswer)
    }

    const onFaChange = evt => {
        props.form.newFalseAnswer = evt.target.value
        props.inputChange(newFalseAnswer)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        props.postQuiz(props.form.newQuestion, props.form.newTrueAnswer, props.form.newFalseAnswer)
     
       
    }
   

    

    return (
        <form id="form" onSubmit={onSubmit}>
            <h2>Create New Quiz</h2>
            <input
                maxLength={50}
                onChange={onInputChange}
                id="newQuestion"
                placeholder="Enter question"
                name="newQuestion" 
                type="text"
                value={props.form.newQuestion}
            />

            <input
                maxLength={50}
                onChange={onTaChange}
                id="newTrueAnswer"
                placeholder="Enter true answer"
                name="newTrueAnswer"
                type="text"
                value={props.form.newTrueAnswer}
            />

            <input
                maxLength={50}
                onChange={onFaChange}
                id="newFalseAnswer"
                placeholder="Enter false answer"
                name="newFalseAnswer"
                type="text"
                value={props.form.newFalseAnswer}
            />

            <button disabled={props.form.newQuestion.trim().length > 0 && props.form.newTrueAnswer.trim().length > 0 && props.form.newFalseAnswer.trim().length > 0 ? false : true }id="submitNewQuizBtn">Submit new quiz</button>
        </form>
    )
}

export default connect(st => st, actionCreators)(Form)
