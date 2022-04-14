import React, { useEffect, useRef, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { GameContext } from './GameContext'


function Cells(props) {
    
    const { snakeCellsArray, foodCell, wallCellsArray } = useContext(GameContext)
    const color = useRef('red')
    const { positionX, positionY } = props

    function isArrayInArray(arr){
        let item_as_string = JSON.stringify([positionX, positionY]);
      
        let contains = arr.some(function(ele){
          return JSON.stringify(ele) === item_as_string;
        });
        return contains;
      }

      useEffect(() => {
          color.current = 'red'
        if(isArrayInArray(snakeCellsArray)){
          return color.current = '#426E86'
        }else if(foodCell[0] == positionX && foodCell[1] == positionY){
          return color.current = '#AF1C1C'
        }else if(isArrayInArray(wallCellsArray)){
            return color.current = '#2F2F28'
        }else{
            return color.current = '#F0EFFE'
        }
      }, )
    return <OneCell color={color.current}/>
  }
  
  const OneCell = React.memo(({ color }) => {
        return <View style={{ backgroundColor: color, ...styles.cell}}></View>
       })

  export default Cells


const styles = StyleSheet.create({
    cell: {
        width: 16,
        height: 16,
        borderColor: 'black',
        borderWidth: 0
    }
})



