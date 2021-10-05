/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
    * /  //------------------
     / * //-------------------
*/

///---------------------------------------------------------------------------------------
// Desafio 01.

import React, { Component } from "react";
import { Image, ScrollView, Text, View } from "react-native";

class App extends Component {
  render() {

    return (
      <ScrollView style={{
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'blue'
      }}>
        <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 20, padding: 20 }}>
          Aula_05: Teste com ScrollView</Text>
        <View style={{ padding: 10, backgroundColor: 'white', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Figura altura={100} largura={100} img={require("./image/p1.PNG")} />

          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ padding: 5, textAlign: 'justify' }}> Este é um exemplo didático de como posicionar
              iagem e texto em linha, isto é, flexDirection: row</Text>
          </View>
        </View>
        <View style={{ padding: 10, backgroundColor: 'powderblue', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Figura altura={100} largura={100} img={require("./image/p2.PNG")} />
          </View>
          <View style={{ flex: 2, padding: 5 }}>
            <Text>Até o momento já aprendemos a trabalhar com 3 componentes básicos do </Text>
            <Text style={{ fontWeight: 'bold' }}>REACT NATIVE, </Text>
            <Text>e com alguns de seus respectivos props.</Text>

          </View>
        </View>
        <View style={{ padding: 10, backgroundColor: 'skyblue', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Figura altura={100} largura={100} img={require("./image/p3.PNG")} />
          </View>
          <View style={{ flex: 2, padding: 5 }}>
            <Text style={{ textAlign: 'justify' }}>
              <Text>podemos</Text>
              <Text style={{ fontStyle: 'italic' }}> passar para o próximo </Text>
              <Text Text style={{ fontFamily: 'Times' }}> COMPONENTES!!</Text>
            </Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Figura altura={100}
            largura={200}
            img={{ uri: 'https://sga.santacruz.br/webprofessor/imagens/logo.png' }}
          />
          <Text style={{ marginTop: 20, color: 'white' }}> teste
            {'\n'} teste para ultrapassar o tamnho da pagina</Text>
        </View>
      </ScrollView >
    );
  }
}
export default App;

class Figura extends Component {
  render() {
    return (
      <Image
        source={this.props.img}
        style={{ width: this.props.largura, height: this.props.altura }}
      />
    );
  }
}

/*//---------------------------------------------------------------------------------------
// Desafio 02.

import React, { Component } from "react";
import {  ScrollView, Text, View } from "react-native";

class App extends Component {
  render() {

    return (
      <ScrollView style={{
        flex: 1,
        marginHorizontal: 10, marginVertical: 10, backgroundColor: 'blue'
      }}>
        <Title texto="Aula o5- teste 2 com ScrollView" />
        <Visor cor='orange' texto="FRANCISCO" />
        <Visor cor='red' texto="MENDES" />
        <Visor cor='yellow' texto="View3" />
        <Visor cor='green' texto="View4" />
        <Visor cor='white' texto="View5" />
       
      </ScrollView>

    );
  }
}
export default App;

class Title extends Component {
  render() {
    return (
      <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 20, padding: 20 }}>
        {this.props.texto}</Text>
    );
  }
}
class Visor extends Component {
  render() {
    return (
      <View style={{marginHorizontal:20, marginVertical: 10, height: 200, backgroundColor: this.props.cor }}>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30 }}>{this.props.texto}</Text>
      </View>

    );
  }
}*///