/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


///---------------------------------------------------------------------------
//Componente image....Desafio 1.

import React, { Component } from "react";
import { Image, Text, View } from "react-native";

class App extends Component {
  render() {
    let img = 'https://sga.santacruz.br/webprofessor/imagens/logo.png';
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 20, padding: 20 }}>
          Aula_05: Teste com Imagens</Text>
        <View style={{ padding: 10, backgroundColor: 'white', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image source={require('./image/p1.PNG')}
              style={{ width: 100, height: 100 }} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ padding: 5, textAlign: 'justify' }}> Este é um exemplo didático de como posicionar
              iagem e texto em linha, isto é, flexDirection: row</Text>
          </View>
        </View>
        <View style={{ padding: 10, backgroundColor: 'powderblue', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image source={require('./image/p2.PNG')}
              style={{ width: 100, height: 100 }} />
          </View>
          <View style={{ flex: 2, padding: 5 }}>
            <Text>Até o momento já aprendemos a trabalhar com 3 componentes básicos do </Text>
            <Text style={{ fontWeight: 'bold' }}>REACT NATIVE, </Text>
            <Text>e com alguns de seus respectivos props.</Text>

          </View>
        </View>
        <View style={{ padding: 10, backgroundColor: 'skyblue', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image source={require('./image/p3.PNG')}
              style={{ width: 100, height: 100 }} />
          </View>
          <View style={{ flex: 2, padding: 5 }}>
            <Text style={{ textAlign: 'justify' }}>
              <Text>podemos</Text>
              <Text style={{ fontStyle: 'italic' }}> passar para o próximo </Text>
              <Text Text style={{ fontFamily: 'Times' }}> COMPONENTES!!</Text>
            </Text>
          </View>
        </View>
        <View style={{ padding: 20}}>
          <Image source={{ uri: img }}
            style={{ width: 200, height: 100 }} />
          <Text style={{ marginTop: 20, color: 'white' }}> Projeto DSV Mobile - UNISANTA CRUZ
            {'\n'} FRANCISCO MENDES</Text>
        </View>
      </View >
    );
  }
}
export default App;


/*//---------------------------------------------------------------------------
//Componente image....Desafio 2.

import React, { Component } from "react";
import { Image, Text, View } from "react-native";

class App extends Component {
  render() {

    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 20, padding: 20 }}>
          Aula_05: Teste com Imagens</Text>
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
            img={{ uri:'https://sga.santacruz.br/webprofessor/imagens/logo.png'}}
          />
          <Text style={{ marginTop: 20, color: 'white' }}> Projeto DSV Mobile - UNISANTA CRUZ
            {'\n'} FRANCISCO MENDES</Text>
        </View>
      </View >
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
}*///