import React, { useEffect } from 'react'
import * as actions from '../state/action-creators'
import { connect } from 'react-redux'

function Quiz(props) {

    useEffect(() => {
        props.fetchQuiz()

    }, [])


    const questionId = props.question.quiz_id
    const answers = props.quiz.map(ans => {
        return ans.text

    })
    const answersId = props.quiz.map(id => {
        return id.answer_id
    })



    return (
        <div id="wrapper">
            {
                // quiz already in state? Let's use that, otherwise render "Loading next quiz..."

                true ? (
                    <>
                        <h2>{props.question.question}</h2>

                        <div id="quizAnswers">
                            <div className={`answer ${props.selectedAnswer === answersId[0] ? "selected" : ""}`} >
                                {answers[0]}
                                <button onClick={() => props.selectAnswer(answersId[0])}>
                                    {props.selectedAnswer === answersId[0] ? "SELECTED" : "Select"}
                                </button>
                            </div>

                            <div className={`answer ${props.selectedAnswer === answersId[1] ? "selected" : ""}`} >
                                {answers[1]}
                                <button onClick={() => props.selectAnswer(answersId[1])}>
                                    {props.selectedAnswer === answersId[1] ? "SELECTED" : "Select"}
                                </button>
                            </div>
                        </div>

                        <button disabled={`${props.selectedAnswer === answersId[0] || props.selectedAnswer === answersId[1] ? "" : "{true}"}`} id="submitAnswerBtn" onClick={() => props.postAnswer(questionId, props.selectedAnswer)}>Submit answer</button>
                    </>
                ) : 'Loading next quiz...'
            }
        </div>
    )
}

export default connect(st => st, actions)(Quiz)