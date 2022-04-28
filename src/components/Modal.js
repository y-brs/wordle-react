export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h2>WIN!</h2>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses.</p>
        </div>
      )}

      {!isCorrect && (
        <div>
          <h2>Unlucky!</h2>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  )
}
