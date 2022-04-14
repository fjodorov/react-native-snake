import React from 'react';
import { GameSettings } from './GameSettings'
import MainScreen from './MainScreen'
import { useSettings } from './useSettings';
import { NativeBaseProvider, Box } from 'native-base'

export default function App() {

  const { speed, updateSpeed, map, updateMap, record, updateRecord, isGameStarted, changeIsGameStarted } = useSettings()


  return (
    <NativeBaseProvider>
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
    <GameSettings.Provider value={{ speed, updateSpeed, map, updateMap, record, updateRecord, isGameStarted, changeIsGameStarted }}>
      <MainScreen />
    </GameSettings.Provider>
    </Box>
  </NativeBaseProvider>
  )
}

