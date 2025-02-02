// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'
import axios from 'axios'

const url = 'http://localhost:9000/api/quiz/next'

export function moveClockwise() {
    return ({
        type: types.MOVE_CLOCKWISE,
        payload: 1
    })
}
export function moveCounterClockwise() {
    return ({
        type: types.MOVE_COUNTERCLOCKWISE,
        payload: 1
    })
}

export function selectAnswer(id) {
    return ({
        type: types.SET_SELECTED_ANSWER,
        payload: id

    })

}


export function setMessage() {
    return ({
        type: types.SET_INFO_MESSAGE
    })
}


export function setQuiz() {
    return ({
        type: types.SET_QUIZ_INTO_STATE
    })
}


export function inputChange({ newQuestion, newTrueAnswer, newFalseAnswer }) {
    return ({
        type: types.INPUT_CHANGE,
        payload: { newQuestion, newTrueAnswer, newFalseAnswer }
    })
}

export function resetForm() {
    return ({
        type: types.RESET_FORM,
        // payload: {
        //     newQuestion: '',
        //     newTrueAnswer: '',
        //     newFalseAnswer: '',
        // }

    })
}

// ❗ Async action creators
export function fetchQuiz() {
    return function (dispatch) {
        // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
        // On successful GET:
        // - Dispatch an action to send the obtained quiz to its state
        axios.get(url)
            .then(res => {

                dispatch({
                    type: types.SET_QUESTIONS_INTO_STATE,
                    payload: res.data
                })
                dispatch({
                    type: types.SET_QUIZ_INTO_STATE,
                    payload: res.data.answers

                })

            })
            .catch(err => {
                console.error(err)
            })
    }
}
export function postAnswer(quiz_id, answer_id) {

    return function (dispatch) {
        // On successful POST:
        // - Dispatch an action to reset the selected answer state
        // - Dispatch an action to set the server message to state
        // - Dispatch the fetching of the next quiz
        axios.post('http://localhost:9000/api/quiz/answer', { "quiz_id": quiz_id, "answer_id": answer_id })
            .then(res => {
                console.log(res)
                dispatch({
                    type: types.SET_SELECTED_ANSWER,
                    payload: null
                })
                dispatch({
                    type: types.SET_INFO_MESSAGE,
                    payload: res.data.message
                })
                dispatch(fetchQuiz())

            })
            .catch(err => console.error(err))

    }
}


export function postQuiz(newQuestion, newTrueAnswer, newFalseAnswer) {
    console.log("POST QUIZ:", newQuestion, newTrueAnswer, newFalseAnswer)
    return function (dispatch) {
        // On successful POST:
        // - Dispatch the correct message to the the appropriate state
        // - Dispatch the resetting of the form
        axios.post('http://localhost:9000/api/quiz/new',
            { "question_text": newQuestion, "true_answer_text": newTrueAnswer, "false_answer_text": newFalseAnswer })
            .then(res => {
                console.log("RES:", res)
                dispatch({
                    type: types.SET_INFO_MESSAGE,
                    payload: `Congrats: "${res.data.question}" is a great question!`
                })
                console.log("check me out im right here dispatch style")
                dispatch({
                    type: types.RESET_FORM
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
