import { createContext } from 'react'


export const GameContext = createContext({
    snakeCellsArray: [],
    foodCell: [],
    updateSnakeCellsArray: () => {},
    updateFoodCell: () => {},
    wallCellsArray: [],
    updateWallCellsArray: () => {}
})