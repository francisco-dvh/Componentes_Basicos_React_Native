
/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/

///---------------------------------------------------------------------------
//Componente Picker....Desafio 1.

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';




class App extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>Qual linguagem de Progamação voce prefere?{'\n'} Mendes</Text>
        <Picker>
          <Picker.Item label='Selecione' value='Selecione' />
          <Picker.Item label='Java' value='Java' />
          <Picker.Item label='JavaScript' value='JS' />
          <Picker.Item label='C++' value='C++' />
          <Picker.Item label='PHP' value='PHP' />
        </Picker>
      </View>
    );
  }
}

const Styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
export default App;


/*//---------------------------------------------------------------------------
//Componente Picker....Desafio 2.

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linguagem: 0,
      msg: ''
    };
    this.selecionou = this.selecionou.bind(this);
  };
  selecionou(itemIndex) {
    let texto = 'Você selecionou  a linguagem';
    const Array_linguagens = ['Java', 'JavaScript', 'C++', 'PHP'];
    if (itemIndex == 0) {
      texto = 'NENHUMA LINGUAGEM SELECIONADA!!'
    }
    else {
      texto = 'Você selecionou a linguagem ' + Array_linguagens[itemIndex - 1]
    }
    this.setState({
      linguagem: itemIndex,
      msg: texto,
    });
  }
  render() {
    let msg = '';
    let img = 'https://sga.santacruz.br/webprofessor/imagens/logo.png';
    return (
      <View style={estilos.area}>
        <View style={estilos.area_sup}>
          <Image source={{ uri: img }}
            style={{ width: 175, height: 100, borderRadius: 20 }} />

          <Text style={estilos.titulo}>DESAFIO 02</Text>
          <Text style={estilos.subtitulo}>Componente Picker</Text>
          <Text style={estilos.questao}>Qual linguagem de Progamação voce prefere?{'\n'} Mendes</Text>
          <Picker style={estilos.selecionador}
            selectedValue={this.state.linguagem}
            onValueChange={this.selecionou}>
            <Picker.Item key={0} label='Selecione' value={0} />
            <Picker.Item key={1} label='Java' value={1} />
            <Picker.Item key={2} label='JavaScript' value={2} />
            <Picker.Item key={3} label='C++' value={3} />
            <Picker.Item key={4} label='PHP' value={4} />
          </Picker>
        </View>
        <View style={estilos.rodape}>
          <Text style={estilos.mensagem}>{this.state.msg}</Text>
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 30
  },
  area_sup: {
    flex: 4,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rodape: {
    flex: 1,
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    padding: 30

  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitulo: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20
  },
  questao: {
    fontSize: 18,
    marginLeft: 30
  },
  selecionador: {
    width: 300, height: 40,
    backgroundColor: 'lightgray',
    marginTop: 10
  },
  mensagem: {
    fontSize: 20,
    marginTop: 10,
    color: 'darkblue'
  }
});
export default App;
*///---------------------------------------------------------------------------
