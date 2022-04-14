import React, { useContext } from 'react'
import { useState, useEffect, useRef } from 'react'
import { StyleSheet, ActionSheetIOS, View, Text } from 'react-native'
import GameField from './GameField'
import { GameContext } from './GameContext'
import Gamepad from './Gamepad'
import { GameSettings } from './GameSettings'
import Walls from './Walls'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-elements'



export default function App() {
  const { snakeCellsArray, updateSnakeCellsArray,
    foodCell, updateFoodCell, wallCellsArray, updateWallCellsArray } = useContext(GameContext)
  const { speed, map, record, changeIsGameStarted, updateRecord } = useContext(GameSettings)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isGamePaused, setIsGamePaused] = useState(false)
  const score = useRef(0)
  const direction = useRef('up')
  const steps = useRef(Date.now())
  const time = useRef(Date.now())

  const GAME_FIELD_SIZE = 25


  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  }

  useEffect(() => {
    steps.current = Date.now() - time.current
    time.current = Date.now()
    const int = setTimeout(() => step(), 200 / speed)
    return () => clearTimeout(int)
  })

  useEffect(() => {
    resetGame()
  }, [])

  function vibrate() {
    // ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  function updateSnake(arr) {
    updateSnakeCellsArray([...arr])
  }

  function changeDirection(newDirection) {
    if (newDirection == 'up' && direction.current == 'down') return
    if (newDirection == 'down' && direction.current == 'up') return
    if (newDirection == 'left' && direction.current == 'right') return
    if (newDirection == 'right' && direction.current == 'left') return
    direction.current = newDirection
    step()
  }

  function isSnakeInSnake(arr) {
    let item_as_string = JSON.stringify(arr);

    let contains = snakeCellsArray.some(function (ele) {
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }

  function isSnakeInWall(arr) {
    let item_as_string = JSON.stringify(arr);

    let contains = wallCellsArray.some(function (ele) {
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }

  function resetGame() {
    setIsGameOver(false)
    updateSnakeCellsArray([[10, 8], [10, 9], [10, 10], [10, 11]])
    updateFoodCell()
    updateWallCellsArray(Walls(map))
    score.current = 0
    direction.current = 'up'
  }

  function showGameOverMenu() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Retry', 'Main menu'],
        title: "Game over!",
        message: `Your score: ${score.current}`,
        cancelButtonIndex: 0
      },
      index => {
        switch (index) {
          case 0: resetGame()
            break

          case 1: changeIsGameStarted(false)
            break
        }
      }
    )
  }

  function showPauseMenu() {
    setIsGamePaused(true)
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Main menu'],
        title: "PAUSE",
        cancelButtonIndex: 0
      },
      index => {
        switch (index) {
          case 0: setIsGamePaused(false)
            break

          case 1: changeIsGameStarted(false)
            break
        }
      }
    )
  }

  function step() {
    if (isGameOver || isGamePaused) return

    let arr = [...snakeCellsArray]
    let x = snakeCellsArray[0][0]
    let y = snakeCellsArray[0][1]

    switch (direction.current) {
      case 'up':
        if (y == 1) {
          arr.unshift([x, GAME_FIELD_SIZE])
        } else {
          arr.unshift([x, y - 1])
        }
        break

      case 'down':
        if (y == GAME_FIELD_SIZE) {
          arr.unshift([x, 1])
        } else {
          arr.unshift([x, y + 1])
        }
        break;

      case 'left':
        if (x == 1) {
          arr.unshift([GAME_FIELD_SIZE, y])
        } else {
          arr.unshift([x - 1, y])
        }
        break;

      case 'right':
        if (x == GAME_FIELD_SIZE) {
          arr.unshift([1, y])
        } else {
          arr.unshift([x + 1, y])
        }
        break;

    }

    if (foodCell[0] == x && foodCell[1] == y) {
      score.current = score.current + speed + map - 1
      vibrate()
      updateFoodCell()
    } else {
      arr.pop()
    }

    if (isSnakeInSnake(arr[0])) {
      setIsGameOver(true)
      showGameOverMenu()
      updateRecord(score.current)
    }

    if (isSnakeInWall(arr[0])) {
      setIsGameOver(true)
      showGameOverMenu()
      updateRecord(score.current)
    }

    updateSnake(arr)
  }

  return (
    <View style={styles.game}>
      <View style={styles.topMenu}>
        <View style={styles.menuText}>
          <Text style={{ fontSize: 22, color: 'white' }}>SCORE: {score.current}</Text>
          <Text style={{ color: 'white' }}>RECORD: {record}</Text>
        </View>
        <Text>Delay: {steps.current}ms</Text>
        <Button
          buttonStyle={{
            backgroundColor: "white"
          }}
          onPress={showPauseMenu}
          icon={
            <Icon
              name="pause"
              size={20}
              color="black"
            />
          }
        />
      </View>
      <View style={styles.gameField}>
        <GameField />
      </View>
      <View style={styles.gamePad}>
        <Gamepad changeDirection={changeDirection} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  game: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  topMenu: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  gameField: {
    marginBottom: 0,
    backgroundColor: 'blue',
    height: 400,
    width: 400,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: 'black',
    width: 100,
    height: 50,
    margin: 5

  }
});
