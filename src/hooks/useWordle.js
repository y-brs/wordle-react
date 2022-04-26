import { useState } from "react"

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  // format a guess into an array of letter objects
  // e.g. [{key: "a", color: "yellow"}] or green/grey colour
  const formatGuess = () => {
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one of the turn state
  const addNewGuess = () => {
  }

  // handle keyup event & track current guess
  // if user press enter, add new guess
  const handleKeyUp = ({ key }) => {
    console.log('### key pressed:', key)

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })

      return
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle
