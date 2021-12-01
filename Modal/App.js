/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


/*//---------------------------------------------------------------------------
//Componente Modal....Desafio 01.
//Aula09..
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <Text style={estilos.titulo}>Desenvolvimento Mobile</Text>
        <Text style={estilos.titulo}>MENDES</Text>
        <Text style={estilos.sub_titulo}>Componente Modal</Text>
        <Button title='Entrar' />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  sub_titulo: {
    fontSize: 20,
    fontStyle: 'italic'
  }
});
export default App;

///---------------------------------------------------------------------------
//Componente Modal....Desafio 02.
//Aula09..

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.abre_Modal = this.abre_Modal.bind(this);

  }
  abre_Modal() {
    alert('Olá');
  }
  render() {
    return (
      <View style={estilos.area_fundo}>
        <Text style={estilos.titulo}>Desenvolvimento Mobile</Text>
        <Text style={estilos.titulo}>MENDES</Text>
        <Text style={estilos.sub_titulo}>Componente Modal</Text>
        <Button title='Entrar' onPress={this.abre_Modal} />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  sub_titulo: {
    fontSize: 20,
    fontStyle: 'italic'
  }
});
export default App;

///---------------------------------------------------------------------------
//Componente Modal....Desafio 03 e 04.
//Aula09..

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_visivel: false
    };

    this.abre_Modal = this.abre_Modal.bind(this);

  }
  abre_Modal() {
    this.setState({modal_visivel:true})
  }
  render() {
    return (
      <View style={estilos.area_fundo}>
        <Text style={estilos.titulo}>Desenvolvimento Mobile</Text>
        <Text style={estilos.titulo}>MENDES</Text>
        <Text style={estilos.sub_titulo}>Componente Modal</Text>
        <Button title='Entrar' onPress={this.abre_Modal} />
        <Modal animationType='slide' visible={this.state.modal_visivel}>
          <View>
            <Text>Oi... Seja bem-vindo(a)</Text>
            <Text>Mendes</Text>
            <Text>Este é um exemplo de Modal</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  sub_titulo: {
    fontSize: 20,
    fontStyle: 'italic'
  }
});
export default App;

*///---------------------------------------------------------------------------
//Componente Modal....Desafio 05.
//Aula09..

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_visivel: false
    };

    this.abre_Modal = this.abre_Modal.bind(this);
    this.fecha_Modal = this.fecha_Modal.bind(this);

  }
  abre_Modal() {
    this.setState({ modal_visivel: true })
  }

  fecha_Modal() {
    this.setState({ modal_visivel: false })
  }
  render() {
    return (
      <View style={estilos.area_fundo}>
        <Text style={estilos.titulo}>Desenvolvimento Mobile</Text>
        <Text style={estilos.titulo}>MENDES</Text>
        <Text style={estilos.sub_titulo}>Componente Modal</Text>
        <Button title='Entrar' onPress={this.abre_Modal} />
        <Modal animationType='slide' visible={this.state.modal_visivel}>
          <View style={{
            marginVertical: 50, marginHorizontal: 20,
            borderRadius: 25, padding: 20, backgroundColor: 'orange'
          }}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
              Oi... Seja bem-vindo(a)</Text>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
              Mendes</Text>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
              Este é um exemplo de Modal</Text>
            <View style={{ height: 10 }}></View>
            <Image source={require('./assets/icon.png')}
              style={{
                height: 150, width: 150, borderRadius: 75,
                alignSelf: 'center'
              }} />
            <Text style={{ alignSelf: 'center', fontSize: 15 }}>
              Aqui podemos inserir imagens, testos e quaisquer outros elementos.
            </Text>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>
              Pressione o botão abaixo para fechar este Modal.
            </Text>
            <View style={{ height: 10 }}></View>
            <Button style={{ width: 100 }} title='FECHAR' onPress={this.fecha_Modal} />

          </View>
        </Modal>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  sub_titulo: {
    fontSize: 20,
    fontStyle: 'italic'
  }
});
export default App;