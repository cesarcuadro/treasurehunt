import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"
import Button from './components/Button'
import Countdown from "./components/Countdown"

const App = () => {
  //Will represent our grid
  const originalArray = [
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ]
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

  const reset = () => {

    setBoard(originalArray)

    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
  }

   const [time, setTime] = useState(5)

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
    setTime("Winner")
    } else if (index === bombLocation) {
      updatedBoard[index] = "💣"
    setBoard(updatedBoard)
    setTime("Lose")
    } else {
      updatedBoard[index] = "🌴"
    setBoard(updatedBoard)
    setTime(time - 1)
    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
        <Button reset={reset} />
        <div>Countdown: {time}</div>
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
