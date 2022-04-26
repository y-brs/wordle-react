import { useState } from "react"

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  // format a guess into an array of letter objects
  // e.g. [{key: "a", color: "yellow"}] or green/grey colour
  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: "grey"}
    })

    // find ant green letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green"
        solutionArray[i] = null
      }
    })

    // find any yellow
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow"
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one of the turn state
  const addNewGuess = () => {
  }

  // handle keyup event & track current guess
  // if user press enter, add new guess
  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log("You used all your guesses")
        return
      }

      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("You already tried that word")
        return
      }

      // check word is 5 long
      if (currentGuess.length !== 5) {
        console.log("Word must be 5 chars")
        return
      }

      const formatted = formatGuess()

      console.log(formatted)
    }

    if (key === "Backspace") {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle
