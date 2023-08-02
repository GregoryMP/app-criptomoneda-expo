import React, { useState , useEffect}  from 'react'
import { StyleSheet, Text, View,TouchableHighlight,Alert } from 'react-native'
import {Picker } from '@react-native-picker/picker';
import axios from 'axios';



export default function Formulario({moneda,criptomoneda,setMoneda,setCriptoMoneda,setConsultarAPI}) {

    const [criptomonedas,setCriptoMonedas]=useState([])

    const obtenerMoneda = moneda =>{
        //console.log(moneda)
        setMoneda(moneda)
    }

    const obtenerCriptoMoneda = cripto => {
        setCriptoMoneda(cripto)
    }

    const cotizarPrecio = () => {
        if(moneda.trim()=='' || criptomoneda.trim()==''){
            mostrarAlerta()
            return
        }
        setConsultarAPI(true) //
    }

    const mostrarAlerta = ()=>{
       Alert.alert(
        'Error ...',
        'Ambos campos son obligatorios',
        [{text:'ok'}]
       )
    }

    useEffect(() => {
        const consultarAPI=async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)
            setCriptoMonedas(resultado.data.Data)
        }
        consultarAPI()
    },[])

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker style={styles.picker}
      selectedValue={moneda}
      onValueChange={moneda => obtenerMoneda(moneda)}  >
        <Picker.Item label="-Selecionar-" value=""/>
        <Picker.Item label="Dolar de EEUU" value="USD"/>
        <Picker.Item label="Euro" value="EUR"/>
        <Picker.Item label="Libra Esterlina" value="GBP"/>
        <Picker.Item label="Peso Mexicano" value="MXN"/>
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
      style={styles.picker}
      selectedValue={criptomoneda}
      onValueChange={cripto => obtenerCriptoMoneda(cripto)}
      itemStyle={{height:120}}
      >
        <Picker.Item label='-Selecionar-' value=""/>
        {criptomonedas.map(cripto => (
            <Picker.Item 
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name} />
        ))}

      </Picker>
      <TouchableHighlight
      style={styles.btnCotizar}
      onPress={() => cotizarPrecio()}>
        <Text
        style={styles.textoCotizar}>
            Cotizar
        </Text>
        
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    label:{
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical:20,
        textAlign: 'center',
        alignSelf: 'center',
        width: '70%',
        backgroundColor: '#5E10BC',
        color: '#FFFFFF',
        padding:5,
        borderRadius:10,
        fontWeight: 'bold',
    },
    picker: {
        width: '80%',
        backgroundColor: '#8FD988',
        alignSelf: 'center',
    },
    btnCotizar:{
        backgroundColor: '#5E49E2',
        padding:10,
        marginTop: 20,
        width: '40%',
        alignSelf: 'center',
        borderRadius: 25,
    },
    textoCotizar:{
        color: '#FFFFFF',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})