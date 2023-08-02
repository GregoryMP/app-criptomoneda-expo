import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Header from "./src/components/Header";
import Formulario from "./src/components/Formulario";
import axios from "axios";
import Cotizacion from "./src/components/Cotizacion";

export default function App() {
  const imageGif = "https://c.tenor.com/vN3DrpB7k-wAAAAi/bitcoin-digibyte.gif";
  const imageGif2 =
    "https://wiki.lemon.me/wp-content/uploads/2022/04/Portada-4.gif";

  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptoMoneda] = useState("");
  const [consultarAPI, setConsultarAPI] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        console.log(url);
        //console.log(resultado.data.DISPLAY[criptomoneda][moneda])

        setConsultarAPI(false);
      }
    };
    cotizarCriptomoneda();
  }, [consultarAPI]);
  return (
    <>
      <StatusBar />
      <Header />
      <View>
        <Formulario
          style={styles.contenido}
          moneda={moneda}
          criptomoneda={criptomoneda}
          setMoneda={setMoneda}
          setCriptoMoneda={setCriptoMoneda}
          setConsultarAPI={setConsultarAPI}
        />
      </View>
      <View>
        <Cotizacion resultado={resultado} criptomoneda={criptomoneda} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: "#000000",
  },
  contenido: {
    marginHorizontal: "2.5%",
  },
});
