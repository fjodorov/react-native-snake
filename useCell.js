import { useState, useCallback } from "react"

export const useCell = () => {

    const GAME_FIELD_SIZE = 25

    const [snakeCellsArray, setSnakeCellsArray] = useState([])
    const [foodCell, setFoodCell] = useState([])
    const [wallCellsArray, setWallCellsArray] = useState([])

    const updateSnakeCellsArray = useCallback((array) => {
        setSnakeCellsArray(array)
    }, [])

    function updateFoodCell() {
        let array
        do{
          array = [getRandomInt(1, GAME_FIELD_SIZE), getRandomInt(1, GAME_FIELD_SIZE)]
        } while(isArrayInSnake(array) || isArrayInArray(array))

        setFoodCell(array)
    }

    const updateWallCellsArray = useCallback((array) => {
        setWallCellsArray(array)

    }, [])

    function isArrayInArray(arr){
        let item_as_string = JSON.stringify([...arr]);
      
        let contains = wallCellsArray.some(function(ele){
          return JSON.stringify(ele) === item_as_string;
        });
        return contains;
      }

      function isArrayInSnake(arr){
        let item_as_string = JSON.stringify(arr);
      
        let contains = snakeCellsArray.some(function(ele){
          return JSON.stringify(ele) === item_as_string;
        });
        return contains;
      }

      function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
      }




    return { snakeCellsArray, foodCell, wallCellsArray, updateSnakeCellsArray, updateFoodCell, updateWallCellsArray }
}