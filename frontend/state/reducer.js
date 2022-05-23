// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
    switch (action.type) {
        case types.MOVE_CLOCKWISE: {
            if (state === 5) {
                return state - 5
            } else {
                return state + action.payload
            }

        }
        case types.MOVE_COUNTERCLOCKWISE: {
            if (state === 0) {
                return state + 5
            } else {
                return state - action.payload
            }

        }
        default:
            return state
    }

}

const initialQuestionState = ""
function question(state = initialQuestionState, action) {
    switch (action.type) {
        case types.SET_QUESTIONS_INTO_STATE: {
            return state = action.payload
        }
        default:
            return state
    }

}

const initialQuizState = []
function quiz(state = initialQuizState, action) {
    switch (action.type) {
        case types.SET_QUIZ_INTO_STATE: {
            return state = action.payload
        }
        default:
            return state
    }

}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
    switch (action.type) {
        case types.SET_SELECTED_ANSWER: {
            console.log("SELECTED ANSWER PAYLOAD:", action.payload)
            return state = action.payload
        }
        default:
            return state
    }


}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
    switch (action.type) {
        case types.SET_INFO_MESSAGE: {
            const message = action.payload
            return state.map(m => {
                return (m.quiz_id === message.quiz_id) ? m : message.quiz_id

            })
        }
        case types.SET_INFO_MESSAGE: {
            const message2 = action.payload
            return state.map(m2 => {
                return (m2.answer_id === message2.answer_id) ? m2 : message2.answer_id
            })
        }
        default:
            return state
    }

}

const initialFormState = {
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: '',
}
function form(state = initialFormState, action) {
    switch (action.type) {
        case types.INPUT_CHANGE: {
            const { newQuestion, newTrueAnswer, newFalseAnswer, value } = action.payload
            return { ...state, [newQuestion]: value, [newTrueAnswer]: value, [newFalseAnswer]: value }
        }
        default:
            return state
    }

}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form, question })
