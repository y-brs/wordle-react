export default function Keypad({ usedKeys }) {
  const letters = require("../dummyData/letters.json")

  return (
    <div className="keypad">
      {letters && letters.map((l) => {
        const color = usedKeys[l.key]

        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}
