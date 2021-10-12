
/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


///---------------------------------------------------------------------------
//Componente Botão.
///---------------------------------------------------------------------------
//Aula07....Desafio 01. 

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.clicou_botao = this.clicou_botao.bind(this);
  }
  clicou_botao() {
    Alert.alert('Desenvolvimento mobile', 'Seja bem Vindo(a)!!');
  }

  render() {
    let img = 'https://sga.santacruz.br/webprofessor/imagens/logo.png';
    return (
      <View style={estilos.area_fundo}>
        <Image source={{ uri: img }}
          style={{ width: 200, height: 120, borderRadius: 20 }}
        />
        <Text style={estilos.titulo}> - Aula 07 -  {'\n'} Mendes</Text>
        <Text style={estilos.subtitulo}> Exemplo de uso do componente Button</Text>
        <Button
          title='Clique aqui'
          onPress={this.clicou_botao}
        />
      </View>
    );
  }
}


const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  titulo: {
    fontSize: 40,
    textAlign: 'center',
    color: 'darkblue',
  },
  subtitulo: {
    fontSize: 40,
    marginBottom: 10,
    textAlign: 'center',
  }
});
export default App;

/*//---------------------------------------------------------------------------
//Componente Botão.
///---------------------------------------------------------------------------
//Aula07....Desafio 02.

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    };
    this.clicou_botao1 = this.clicou_botao1.bind(this);
    this.clicou_botao2 = this.clicou_botao2.bind(this);
    this.clicou_botao3 = this.clicou_botao3.bind(this);
  }
  clicou_botao1() {
    Alert.alert('Desenvolvimento mobile', 'Seja bem Vindo(a)!!');
  };
  clicou_botao2() {
    this.setState({ msg: 'Este Botão mostra o testo exemplo!!' });
  };
  clicou_botao3() {
    Alert.alert({ msg: '' });
  };
  render() {
    let img = 'https://sga.santacruz.br/webprofessor/imagens/logo.png';
    return (
      <View style={estilos.area_fundo}>
        <Image source={{ uri: img }}
          style={{ width: 200, height: 120, borderRadius: 20 }}
        />
        <Text style={estilos.titulo}> - Aula 07 -  {'\n'} Mendes</Text>
        <Text style={estilos.subtitulo}> DESAFIO 02 {'\n'} usos do componente Button</Text>
        <View style={{ marginBottom: 30 }}>
          <Button
            title='Botão Pincipal'
            onPress={this.clicou_botao1}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center'
        }}>

          <Button
            title='Mostar Texto'
            color='black'
            onPress={this.clicou_botao2}
          />
          <Text>     </Text>
          <Button
          title= 'Limpar Texto'
          color= 'green'
          onPress ={this.clicou_botao3}
          />
          </View>
          <Text style = {estilos.paragrafo}>{this.state.msg}</Text>
        </View>
        );
  }
}


        const estilos = StyleSheet.create({
          area_fundo: {
          flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
  },
        titulo: {
          fontSize: 40,
        textAlign: 'center',
        color: 'darkblue',
  },
        subtitulo: {
          fontSize: 40,
        marginBottom: 10,
        textAlign: 'center',
  },
  paragrafo: {
    fontSize: 30,
    marginTop:10
  }
});
        export default App;*///