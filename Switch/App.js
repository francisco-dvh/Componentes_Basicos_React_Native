/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


///---------------------------------------------------------------------------
//Componente Switch
///---------------------------------------------------------------------------
//Aula07....Desafio 01. 

import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status1: false,
      status2: false,
      cor_fundo: 'white',
      fonteProf: 'normal',
      fontEstudante: 'bold'
    };
    this.trocaStatus1 = this.trocaStatus1.bind(this);
    this.trocaStatus2 = this.trocaStatus2.bind(this);
  }

  trocaStatus1(novoStatus) {
    let cor;
    if (novoStatus)
      cor = 'yellow';
    else
      cor = 'white';
    alert(' a cor do fundo vai mudar para : '  + cor);
    this.setState({
      status1: novoStatus,
      cor_fundo: cor
    });
  };
  trocaStatus2(novoStatus) {
    let fonteP, fonteE;
    if (novoStatus)
     {
      fonteP = 'bold';
      fonteE = 'normal';
      alert('a opção PROFESSOR  vai ficar em negrito');
    }
    else 
    {
      fonteE = 'bold';
      fonteP = 'normal';
      alert('a opção ESTUDANTE vai ficar em negrito');
    }
    this.setState({
      status2: novoStatus,
      fontEstudante: fonteE,
      fonteProf: fonteP
    });
  };

  render() {
    return (
    < View style = {[estilos.area, { backgroundColor: this.state.cor_fundo, }]} >
      <View style={estilos.area_titulo}>
        <Text style = {estilos.titulo}>DESAFIO 01</Text>
    </View>
    <View style ={estilos.area_subtitulo}>
    <Text style = {estilos.Subtitulo}>Exemplo do componente SWITCH{'\n'}MENDES</Text>
    </View >
      <View style={estilos.area_corpo}>
        <View style={estilos.area_swith}>
          <Text style={{ fontSize: 20 }}>Muda a cor do fundo</Text>
          <Switch
            value={this.state.status1}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.state.status1 ? '#f5dd4d' : '#f00'}
            onValueChange={this.trocaStatus1} />
        </View>
        <Text style={[estilos.texto, { marginLeft: 20 }]}>Selecione a opção:</Text>
        <View style={estilos.area_swith}>
          <Text style={{ fontSize: 20, fontWeight: this.state.fontEstudante }}>Estudande </Text>
          <Switch
           value={this.state.status2}
            onValueChange={this.trocaStatus2} />
          <Text style={{ fontSize: 20, fontWeight: this.state.fonteProf }}>  Professor</Text>
        </View>
      </View>
      </View >

    );
  }
}

const estilos = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  area_titulo: {
    flex: 0.15,
    marginTop: 10,
    alignItems: 'stretch',
    backgroundColor: 'orange',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'darkorange',
    borderWidth: 4,
  },
  titulo: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    margin:20,
    textAlign:'center'
  },
  area_subtitulo: {
    flex: 0.5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  area_corpo: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  area_swith: {
    flexDirection: 'row',
    borderColor:'red',
    borderRadius: 25,
    borderWidth: 4,
    padding: 10
  },
  Subtitulo: {
    fontSize: 25,
    fontStyle: 'italic',
    margin: 20,
    textAlign: 'center'
  },
  texto: {
    fontSize: 20,
    marginTop: 20
  }
});
export default App;










