/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
    * / //------------------
     / * //-------------------
*/
///---------------------------------------------------------------------------------------
// Desafio 01.

import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableHighlight
          onPress={() => alert('você clicou em mim!!!\nMendes')}>
          <Text style={{ alignSelf: 'center', backgroundColor: 'powderblue' }}>Clicar aqui</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default App;



/*//---------------------------------------------------------------------------------------
// Desafio 02.

import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';

class App extends Component {
  render() {
    let nome = 'Francisco Mendes';
    return (
      <View style={{ flex: 1, marginHorizontal: 10, marginTop: 30 }}>
        <View style={{
          flex: 5, justifyContent: 'center', backgroundColor: 'skyblue',
          borderColor: 'red', borderStyle: 'solid', borderWidth: 4
        }}>
          <Text style={{ alignSelf: "center" }}>CURSO DE REACT NATIVE</Text>
          <TouchableHighlight
            onPress={() => alert('você clicou em mim!!!\nMendes')}>
            <Text style={{ alignSelf: "center", backgroundColor: 'powderblue' }}>Clicar aqui</Text>
          </TouchableHighlight>
          <Text style={{ alignSelf: "center", fontWeight: 'bold' }}>
            Exemplo de componente TouchableHighlight </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ alignSelf: 'center' }}>Aluno: {nome}</Text>
        </View>
      </View>
    );
  }
}
export default App;

///---------------------------------------------------------------------------------------
// Desafio 03.

import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      Aluno : " Mendes"
    };
  }
  render() {
    return (
      <View style={{ flex: 1, marginHorizontal: 10, marginTop: 30 }}>
        <View style={{
          flex: 5, justifyContent: 'center', backgroundColor: 'skyblue',
          borderColor: 'red', borderStyle: 'solid', borderWidth: 4
        }}>
          <Text style={{ alignSelf: "center" }}>CURSO DE REACT NATIVE</Text>
          <TouchableHighlight
            onPress={() => alert('você clicou em mim!!!\nMendes')}>
            <Text style={{ alignSelf: "center", backgroundColor: 'powderblue' }}>Clicar aqui</Text>
          </TouchableHighlight>
          <Text style={{ alignSelf: "center", fontWeight: 'bold' }}>
            Exemplo de componente TouchableHighlight </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ alignSelf: 'center' }}>Aluno: {this.state.Aluno}</Text>
        </View>
      </View>
    );
  }
}
export default App;

///---------------------------------------------------------------------------------------
// Desafio 03.

import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aluno: "Francisco"
    };
    this.clicou = this.clicou.bind(this);
  }
  //função que srá disparado, quando o coponente for pressionado (clicado ou teclado)
  clicou() {
    this.setState({
      aluno: 'Mendes'
    })
  }
  render() {
    return (
      <View style={{ flex: 1, marginHorizontal: 10, marginTop: 30 }}>
        <View style={{
          flex: 5, justifyContent: 'center', backgroundColor: 'skyblue',
          borderColor: 'red', borderStyle: 'solid', borderWidth: 4
        }}>
          <Text style={{ alignSelf: "center" }}>CURSO DE REACT NATIVE</Text>
          <TouchableHighlight
            onPress={this.clicou}>
            <Text style={{ alignSelf: "center", backgroundColor: 'powderblue' }}>Clicar aqui</Text>
          </TouchableHighlight>
          <Text style={{ alignSelf: "center", fontWeight: 'bold' }}>
            Exemplo de componente TouchableHighlight </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ alignSelf: 'center' }}>Aluno: {this.state.aluno}</Text>
        </View>
      </View>
    );
  }
}
export default App; *///
