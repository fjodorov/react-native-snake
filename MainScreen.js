import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './Game'
import { GameContext } from './GameContext';
import { GameSettings } from './GameSettings'
import { useCell } from './useCell';
import MainMenu from './MainMenu'

export default function App() {

  const { isGameStarted } = useContext(GameSettings)

  const { snakeCellsArray, foodCell, wallCellsArray, updateSnakeCellsArray, updateFoodCell, updateWallCellsArray } = useCell()


  return (
    <View style={styles.container}>
      { 
        isGameStarted ? 
        <GameContext.Provider value={{ snakeCellsArray, foodCell, wallCellsArray, updateSnakeCellsArray, updateFoodCell, updateWallCellsArray  }}>
          <Game />
        </GameContext.Provider> 
        :
       <MainMenu /> 
      }
    </View> 

  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#1E1E20',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
