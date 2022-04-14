import React from "react"
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import arrowImg from './images/arrow.png'
export default function Gamepad(props) {
    const { changeDirection } = props

    return(
        <View style={styles.gamepad}>
            <TouchableOpacity style={{ ...styles.button, ...styles.verticalButton }} onPress={ () => changeDirection('up') }>
            <Image source={arrowImg} style={[styles.img, {
                    transform: [
                    { rotate: '270deg' } ]}]}>
                        
                    </Image>
            </TouchableOpacity>
            <View style={styles.horizontalButtons}>
            <TouchableOpacity style={{ ...styles.button, ...styles.horizontalButton }} onPress={ () => changeDirection('left') }>
                <Image source={arrowImg} style={[styles.img, {
                    transform: [
                    { rotate: '180deg' } ]}]}>
                        
                    </Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, ...styles.horizontalButton }} onPress={ () => changeDirection('right') }>
            <Image source={arrowImg} style={[styles.img, {
                    transform: [
                    { rotate: '0deg' } ]}]}>
                        
                    </Image>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ ...styles.button, ...styles.verticalButton }} onPress={ () => changeDirection('down') }>
                <Image source={arrowImg} style={[styles.img, {
                    transform: [
                    { rotate: '90deg' } ]}]}>

                    </Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gamepad: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        width: 50,
        height: 90,
        
    },
    button: {
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
     // backgroundColor: 'blue',
  
      },

      verticalButton:{
        height: 120,
        width: '70%',
      },

      horizontalButton:{
        height: 120,
        width: '47%',
      },

      horizontalButtons: {
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
      }
  });