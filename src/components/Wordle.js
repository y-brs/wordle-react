import { useEffect, useState } from "react"
import { ToastContainer } from 'react-toastify';
import useWordle from "../hooks/useWordle"
import Grid from "./Grid"
import Keypad from "./Keypad"
import Modal from './Modal'

import 'react-toastify/dist/ReactToastify.min.css';

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, turn, isCorrect, usedKeys } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }

    return () => window.removeEventListener("keyup", handleKeyUp)
  }, [handleKeyUp, isCorrect, turn, currentGuess])

  return (
    <>
      <main>
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </main>
      <footer>
        <Keypad usedKeys={usedKeys} />
      </footer>
    </>
  )
}
