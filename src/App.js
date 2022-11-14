import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"
import userEvent from "@testing-library/user-event"

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

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random()  * board.length))

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random()  * board.length))

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board] // important step
    //make conditional for either winner or loser box
    // makes a copy of the board in state so that we can modify a single instance inside the array
    if (index === treasureLocation) {
      //updating a single instance of the copied array to treasure emoji
      updatedBoard[index] = "💎"
      //setting entire board to state
    setBoard(updatedBoard)
    } else if (index === bombLocation) {
      updatedBoard[index] = "💣"
    setBoard(updatedBoard)
    } else {
      updatedBoard[index] = "🌴"
    setBoard(updatedBoard)
    }

  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
        <div className="gameboard">
          {/* Map through the board array to create all the boxes needed */}
          {board.map((value, index) => {
          return (
            <Square 
            value={value} 
            key={index} 
            index={index}
            handleGamePlay={handleGamePlay}
          />
        )
      })}
      </div>
    </>
  )
}

export default App
