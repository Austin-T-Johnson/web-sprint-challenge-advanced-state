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


export function setMessage(quiz_id, answer_id) { 
    console.log("CHECK ME OUT BOY:", quiz_id, answer_id)
    return function (dispatch) {
    axios.post("http://localhost:9000/api/quiz/answer", { "quiz_id": quiz_id, "answer_id": answer_id } )
    .then(res => {
        
        dispatch({
            type: types.SET_INFO_MESSAGE,
            payload: res.data.message
        })
    })
    .catch(err => console.error(err))
}
}


export function setQuiz() { 
    return ({
        type: types.SET_QUIZ_INTO_STATE
    })
}


export function inputChange({ newQuestion, newTrueAnswer, newFalseAnswer, value }) { 
    return ({
        type: types.INPUT_CHANGE,
        payload: {newQuestion, newTrueAnswer, newFalseAnswer, value}
    })
}

export function resetForm() { 

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
            payload: res.data.question
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
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(newQuestion, newTrueAnswer, newFalseAnswer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/new', {newQuestion, newTrueAnswer, newFalseAnswer}) 
    .then(res => {
        console.log("POST QUIZ:", res)
        dispatch({
            type: types.INPUT_CHANGE,
            payload: res.data
        })
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
