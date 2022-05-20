import React, { useEffect } from 'react'
import * as actions from '../state/action-creators'
import { connect } from 'react-redux'

function Quiz(props) {
    
  useEffect(() => {
      props.setQuiz()
      
  }, [])


  const answers = props.quiz.map(ans => {
      return ans.text
  })
console.log("answers:", answers)
console.log("questions:", props.quiz)

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
       
        true ? (
          <>
            <h2>{props.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected" >
               {answers[0]}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {answers[1]}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)