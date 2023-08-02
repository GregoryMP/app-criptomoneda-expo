import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Cotizacion({ criptomoneda, resultado }) {
  if (Object.keys(resultado).length == 0) return null

  return (
    <View style={styles.resultado}>
      <View style={{ flexDirection: "row", margin: 5, width: "100%" }}>
        <View
          style={{
            width: "48%",
            textAlign: "center",
            backgroundColor: "#8FD988",
            marginLeft: 5,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              paddingBottom: 1,
              textTransform: "uppercase",
            }}
          >
            {" "}
            Precio del  {criptomoneda} : {""}
            <Text style={styles.precio}> {"\n" + resultado.LOWDAY}</Text>
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            textAlign: "center",
            backgroundColor: "#8FD988",
            marginLeft: 10,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              paddingBottom: 10,
              textTransform: "uppercase",
            }}
          >
            Precio mas alto del dia : {""}
            <Text style={styles.precio}>{"\n" + resultado.HIGHDAY}</Text>
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", margin: 5, width: "100%" }}>
        <View
          style={{
            width: "48%",
            textAlign: "center",
            alignSelf: "flex-end",
            backgroundColor: "#8FD988",
            marginLeft: 5,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              paddingBottom: 10,
              textTransform: "uppercase",
            }}
          >
            Precio mas bajo del dia : {""}
            <Text style={styles.precio}>{"\n" + resultado.LOWDAY}</Text>
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            textAlign: "center",
            backgroundColor: "#8FD988",
            marginLeft: 10,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              paddingBottom: 10,
              textTransform: "uppercase",
            }}
          >
            Variacion ultimo 24 horas : {""}
            <Text style={styles.precio}>
              {"\n" + resultado.CHANGEPCT24HOUR}%
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: "#5E10BC",
    padding: 8,
    height: "100%",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 40,
  },
  precio: {
    fontSize: 20,
  },
});
