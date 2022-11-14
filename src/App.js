import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

const App = () => {
  //Will represent our grid
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  return (
    <>
      <h1>Treasure Hunt Game</h1>
        <div className="gameboard">
      {/* Map through the board array to create all the boxes needed */}
      {board.map((value, index) => {
        return <Square value={value} key={index} />
      })}
      </div>
    </>
  )
}

export default App
