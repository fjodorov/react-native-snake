import React from "react"
import { StyleSheet, View } from 'react-native';

export default function TestCell(props) { 
    return(
        <View style={{ backgroundColor: props.color, ...styles.cell}}></View>
    )
 }

 const styles = StyleSheet.create({
    cell: {
        width: 16,
        height: 16,
        borderColor: 'black',
        borderWidth: 0
    }
})