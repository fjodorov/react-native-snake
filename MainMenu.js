import React, { useContext, useEffect, useState }from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { GameSettings } from "./GameSettings"
import arrow from './images/arrow.png'
import mapOne from './images/map1.png'
import mapTwo from './images/map2.png'
import mapThree from './images/map3.png'
import mapFour from './images/map4.png'
import mapFive from './images/map5.png'
import mapSix from './images/map6.png'

export default function MainMenu() {
    const  { speed, updateSpeed, map, updateMap, record, isGameStarted, changeIsGameStarted }  = useContext(GameSettings)
    const [ isLoading, setIsLoading ] = useState(false)

    function changeSpeedHandler(newSpeed){
        if(speed != newSpeed) updateSpeed(newSpeed)
    }

    function changeMapHandler(newMap){
        if(map != newMap) updateMap(newMap)
    }

    useEffect(() => {
     //   setTimeout(() => setIsLoading(false), 1000)
    }, [])

    return(
        isLoading ? null :
        <View style={ styles.menu }>
            <View style={ styles.optionsContainer }>
                <Text style={ styles.header }>MAIN MENU</Text>
                 <View style={ styles.options }>
                 <Text style={ styles.name }>SNAKE</Text>
                 <Text style={ styles.record }>Your record: {record}</Text>
                 </View>
            </View>
            <View style={ styles.optionsContainer }>
                <Text style={ styles.header }>SPEED</Text>
                <View style={ styles.options }>
                    <TouchableOpacity
                    onPress={() => changeSpeedHandler(1)}
                    style={{ ...styles.optionSpeed,
                        borderWidth: speed == 1 ? 5 : 0,
                    }}><Text style={{ ...styles.speed, color: speed == 1 ? '#AF1C1C' : 'white' }}>x1</Text></TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => changeSpeedHandler(2)}
                    style={{ ...styles.optionSpeed,
                        borderWidth: speed == 2 ? 5 : 0
                    }}><Text style={{ ...styles.speed, color: speed == 2 ? '#AF1C1C' : 'white' }}>x2</Text></TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => changeSpeedHandler(3)}
                    style={{ ...styles.optionSpeed,
                        borderWidth: speed == 3 ? 5 : 0
                    }}><Text style={{ ...styles.speed, color: speed == 3 ? '#AF1C1C' : 'white' }}>x3</Text></TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => changeSpeedHandler(4)}
                    style={{ ...styles.optionSpeed,
                        borderWidth: speed == 4 ? 5 : 0,
                    }}><Text style={{ ...styles.speed, color: speed == 4 ? '#AF1C1C' : 'white' }}>x4</Text></TouchableOpacity>
                </View>
            </View>
            <View style={ styles.optionsContainer }>
                <Text style={ styles.header }>MAP</Text>
                <View style={ styles.options }>
                <TouchableOpacity
                        onPress={() => changeMapHandler(1)}>
                        <View style={{ ...styles.optionMap, borderWidth: map == 1 ? 7 : 0 }}><Image source={mapOne} style={styles.mapImage} /></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => changeMapHandler(2)}>
                        <View style={{ ...styles.optionMap, borderWidth: map == 2 ? 7 : 0 }}><Image source={mapTwo} style={styles.mapImage} /></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => changeMapHandler(3)}>
                        <View style={{ ...styles.optionMap, borderWidth: map == 3 ? 7 : 0 }}><Image source={mapThree} style={styles.mapImage} /></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => changeMapHandler(4)}>
                        <View style={{ ...styles.optionMap, borderWidth: map == 4 ? 7 : 0 }}><Image source={mapFour} style={styles.mapImage} /></View>
                    </TouchableOpacity>
                   <TouchableOpacity
                        onPress={() => changeMapHandler(5)}>
                        <View style={{ ...styles.optionMap, borderWidth: map == 5 ? 7 : 0 }}><Image source={mapFive} style={styles.mapImage} /></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => changeMapHandler(6)}>
                        <View style={{ ...styles.optionMap, borderWidth: map == 6 ? 7 : 0 }}><Image source={mapSix} style={styles.mapImage} /></View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity 
            style={styles.start}
            onPress={async () => changeIsGameStarted(true)}>
                <Text style={ styles.startText }>START</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        marginTop: 100
    },

    name: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 50
    },

    record: {
        width: '100%',
        textAlign: 'center'
    },

    optionsContainer: {
        width: '85%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
       // backgroundColor: 'rgba(47, 47, 40, 1),',
        backgroundColor: '#FFFFFF',
        marginBottom: 20
    },

    header: {
        width: '100%',
        textAlign: 'center',
        color: '#1E1E20',
        fontWeight: '700',
        fontSize: 24
    },
    speed: {
        fontSize: 36,
        color: '#AF1C1C',

    },

    options:{
        borderTopColor: 'black',
        borderTopWidth: 3,
        paddingTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    
    optionSpeed: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#1E1E20',
        borderColor: '#AF1C1C',
        borderRadius: 10
    },

    optionMap: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderColor: '#AF1C1C',
        borderRadius: 5,
        marginBottom: 7,
    },

    mapImage: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: 90,
        height: 90
    },

    start: {
        width: '85%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#962715',
    },

    startText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 56
    }
})