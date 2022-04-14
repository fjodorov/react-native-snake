import { useState, useCallback, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSettings = () => {

    const [ speed, setSpeed ] = useState(1)
    const [ map, setMap ] = useState(1)
    const [ record, setRecord ] = useState(0)
    const [ isGameStarted, setIsGameStarted ] = useState(false)

    useEffect(async () => {
        try {
            const value = await AsyncStorage.getItem('@UsersRecord')
            if(value == null) {
                await AsyncStorage.setItem('@UsersRecord', `${record}`)
            }else{
                setRecord(+value)
            }
          } catch (error) {
           return alert(error)
          }
    }, [])

    const updateSpeed = useCallback( newSpeed => {
        setSpeed(newSpeed)
    }, [])

    const updateMap = useCallback( newMap => {
        setMap(newMap)
    }, [])

    async function updateRecord(newRecord){
        if(newRecord <= record) return
        setRecord(newRecord)
            try {
                await AsyncStorage.setItem('@UsersRecord', `${newRecord}`)
            } catch (error){
                 return alert(error)
            }
    }

    const changeIsGameStarted = useCallback( newState => {
         setIsGameStarted(newState)
    }, [])




    return { speed, updateSpeed, map, updateMap, record, updateRecord, isGameStarted, changeIsGameStarted }
}