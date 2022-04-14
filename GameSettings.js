import { createContext } from "react";


export const GameSettings = createContext({
    speed: 1,
    updateSpeed: () => {},
    map: 1,
    updateMap: () => {},
    record: 0,
    updateRecord: () => {},
    isGameStarted: false,
    changeIsGameStarted: () => {}
})