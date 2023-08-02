import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
      <Text style={styles.encabezado}>App Criptomonedas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: 10,
        backgroundColor:'#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 23,
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing:1
    }
})