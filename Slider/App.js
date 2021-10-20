
/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


///---------------------------------------------------------------------------
//Componente Slider....Desafio 01.


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/Slider';

class App extends Component {
  render() {
    return (
      <View style={estilos.area}>
        <Text style={estilos.titulo}>DESAFIO 01</Text>
        <Text style={estilos.subtitulo}>Componente Slider{'\n'} Mendes</Text>

        <Slider style={estilos.slider} step={1}
          minimumValue={0} maximumValue={100} 
          minimumTrackTintColor='blue'/>

        <Slider style={estilos.slider2} step={10}
          minimumValue={0} maximumValue={100}
          
          minimumTrackTintColor='white' />
      </View>

    );
  }
}

const estilos = StyleSheet.create({
  area:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'red'
  },
  subtitulo:{
    fontSize:20,
    fontStyle:'italic',
    color: 'darkblue'
  },
  slider:{
    width:'75%',
    marginTop:30
  },
  slider2:{
    width:'75%',
    marginTop:30,
  }
});
export default App;



/*//---------------------------------------------------------------------------
//Componente Slider....Desafio 02.


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/Slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indicador1: 0,
      indicador2: 0,
      cor: '#fff'
    };
    this.usandoSlider1 = this.usandoSlider1.bind(this);
    this.usandoSlider2 = this.usandoSlider2.bind(this);
  }
  usandoSlider1(index) {
    this.setState({
      indicador1: index
    });
  };
  usandoSlider2(index) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({
      indicador2: index,
      cor: randomColor
    });
  };
  render() {
    return (
      <View style={[estilos.area, { backgroundColor: this.state.cor }]}>
        <Text style={estilos.titulo}>DESAFIO 02</Text>
        <Text style={estilos.subtitulo}>Componente Slider{'\n'} Mendes</Text>
        <View style={{ width: '75%', flexDirection: 'row' }}>

          <Slider style={estilos.slider} step={1}
            minimumValue={0} maximumValue={100}
            minimumTrackTintColor='blue'
            onValueChange={this.usandoSlider1} />

          <Text>{this.state.indicador1}</Text>
        </View>
        <View style={{ width: '75%', flexDirection: 'row' }}>
          <Slider style={estilos.slider2} step={10}
            minimumValue={0} maximumValue={100}
            minimumTrackTintColor='black'
            
            onValueChange={this.usandoSlider2} />
          <Text>{this.state.indicador2}</Text>
        </View>
      </View>

    );
  }
}

const estilos = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red'
  },
  subtitulo: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'darkblue'
  },
  slider: {
    width: '75%',
    marginTop: 30
  },
  slider2: {
    width: '75%',
    marginTop: 30,
  }
});
export default App;

*///---------------------------------------------------------------------------