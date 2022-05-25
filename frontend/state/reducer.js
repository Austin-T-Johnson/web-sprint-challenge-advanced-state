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
            return state = action.payload
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
            const { question_text, true_answer_text, false_answer_text, value } = action.payload
            return { ...state, [question_text]: value, [true_answer_text]: value, [false_answer_text]: value }
        }
        case types.RESET_FORM: {
            return state
        }
        default:
            return state
    }

}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form, question })
