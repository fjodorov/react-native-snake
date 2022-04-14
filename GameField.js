import React from 'react'
import Cell from './Cell'


export default React.memo(function GameField () {
    const GAME_FIELD_SIZE = 25

      function Cells(){
        let cellsArray = []
        let i = 1
        for(let y = 1; y <= GAME_FIELD_SIZE; y++){
            for(let x = 1; x <= GAME_FIELD_SIZE; x++){
                i++
                cellsArray.push(<Cell key={i} positionX={x} positionY={y} />)
            }
        }

    return cellsArray
    }

    return <Cells />
  
  })

