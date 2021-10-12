/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


/*//---------------------------------------------------------------------------
//Aula07....Desafio 1. 

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <Text style={estilos.titulo}>Aula 07 - DESAFIO 01</Text>
        <Text style={estilos.subtitulo}>Componente TextInput</Text>
        <Text style={estilos.paragrafo}>Digite o seu nome </Text>
        <TextInput style={estilos.entrada_texto} />
        <Text style={estilos.paragrafo}>---Aqui srá apresentado a mesagem
          dpois que o nome for digitado no componente TextInput---</Text>
      </View>

    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    //alignSelf:'center',
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
  paragrafo: {
    margin: 10,
  },
  entrada_texto: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  }
});
export default App;



///---------------------------------------------------------------------------
//Aula07....Desafio 1.1. 

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

class App extends Component {
  //declaração do state
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };
    //declaração ou instanciação da função
    this.capturaNome = this.capturaNome.bind(this);
  }
  //função chamada para trocar o state toda vez que o
  //usuário altera o conteúdo TextInput
  capturaNome(texto) {
    if (texto.length > 0) {
      this.setState({ nome: 'Olá ' + texto + '.\n Seja Bem Vindo(a)!' });
    }
    else {
      this.setState({ nome: ' ' });
    }
  }
  //Fim da função
  render() {
    return (
      <View style={estilos.area_fundo}>
        <Text style={estilos.titulo}>Aula 07 - DESAFIO 01</Text>
        <Text style={estilos.subtitulo}>Componente TextInput(Parte2)</Text>

        <TextInput style={estilos.entrada_texto}
          placeholder='Digite seu nome aqui'
          //função para capturar o nome e alterar o state 'nome'
          onChangeText = {this.capturaNome}
        />
        <Text style={estilos.paragrafo}>{this.state.nome}</Text>
      </View>

    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    //alignSelf:'center',
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
  paragrafo: {
    margin: 10,
  },
  entrada_texto: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  }
});
export default App;

*///---------------------------------------------------------------------------
//Aula07....Desafio 02. 

import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, TextInput } from "react-native";

class App extends Component {
  //declaração do state
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      msg1: ''
    };
    //declaração ou instanciação da função
    this.capturaNome = this.capturaNome.bind(this);
    this.mosta_msg_PerdeFoco = this.mosta_msg_PerdeFoco.bind(this);
    this.mostra_msg_RecebeFoco = this.mostra_msg_RecebeFoco.bind(this);
  }
  //função chamada para trocar o state toda vez que o
  //usuário altera o conteúdo TextInput
  capturaNome(texto) {
    if (texto.length > 0) {
      this.setState({ msg1: 'Olá ' + texto + '.\n Seja Bem Vindo(a)!' +
          '\n Por gentileza, preencha ' +
          ' os dados solicitados abaixo'});
      this.setState({ nome: texto });
    }
    else {
      this.setState({ nome: ' ' });
    }
  }
  //Fim da função capturaNome()
  //função chamada quando o componente TextInput recebe o foco
  mostra_msg_RecebeFoco() {
    alert(' o componente recebeu o foco');
  }
  // fim da função msotar_msg1()
  //função chamada quando o componente TextInput recebe o foco
  mosta_msg_PerdeFoco() {
   alert('o componente perdeu o foco');
  }

  render() {
    return (
      <ScrollView>
        <View style={estilos.area_fundo}>
          <Text style={estilos.titulo}>Aula 07 - DESAFIO 02</Text>
          <Text style={estilos.subtitulo}>Componente TextInput(Parte2)</Text>

          <TextInput style={estilos.entrada_texto}
            placeholder='Digite seu nome aqui'
            onFocus={this.mostra_msg_RecebeFoco}
            onChangeText={this.capturaNome}
            autoCapitalize='characters'
          />
          <Text style={estilos.paragrafo}>{this.state.msg1}</Text>

          <TextInput style={estilos.entrada_texto}
            placeholder='Digite o seu e-mail'
            onBlur={this.mostra_msg_PerdeFoco}
            keyboardType='e-mail-address'
          />
          <TextInput style={estilos.entrada_texto}
            placeholder='Campo não editável'
            editable={false}
          />
          <TextInput style={estilos.entrada_texto}
            placeholder='Digite o seu número de telefone'
            keyboardType='phone-pad'
          />
          <TextInput style={estilos.entrada_texto}
            placeholder='Qual frase define você?'
            keyboardType='default'
            multiline={true}
            maxLength={40}
          />

        </View>
      </ScrollView>
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
  paragrafo: {
    margin: 10,
  },
  entrada_texto: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  entrada_texto2: {
    height: 135,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  }
});
export default App;