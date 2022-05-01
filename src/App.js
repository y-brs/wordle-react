import { useEffect, useState } from "react"
import Wordle from "./components/Wordle"
import wordBank from "../src/dummyData/wordle-bank.txt"

function App() {
  const [solution, setSolution] = useState(null)
  const [wordSet, setWordSet] = useState([])

  useEffect(() => {
    localStorage.setItem('wordSet', JSON.stringify(wordSet))
  }, [wordSet])

  useEffect(() => {
    fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArray = result.split("\n");
      const randomSolution = wordArray[~~(Math.random()*wordArray.length)]

      setSolution(randomSolution)
      setWordSet(wordArray)
    })
  }, [setSolution])

  console.log("### solution:", solution)

  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
      </header>

      {solution && <Wordle solution={solution} wordSet={wordSet} />}
    </div>
  )
}

export default App
