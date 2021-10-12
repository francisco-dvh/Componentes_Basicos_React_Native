/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
    * /  //------------------
     / * //-------------------
*/

///---------------------------------------------------------------------------------------
// Desafio 01.

import React, { Component } from 'react';
import { StyleSheet, Text, scrollView, View, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <scrollView style={{ flex: 1, padding: 10, backgroundColor: 'powderblue' }}>
        <View style={{ textAlign:'center'}}>
          <Text style={{ fontSize: 30, fontWeight:'bold', color: 'white' }}>StyleSheet</Text>
        </View>
        <View style={{ flex: 3, marginHorizontal: 10, padding: 10, backgroundColor: 'black' }}>
          <Text style={{ marginBottom: 10, fontSize: 20, color: 'blue' }}>Introdução</Text>
          <Text style={{ textAlign: 'justify', fontSize: 15, color: 'green' }}>Você já deve ter observado que durante a
            construção dos nossos projetos que, quando inserimos os componentes , utilizamos o props style,
            isto é, incluimos estilos como cor, largura, altura, cor de fundo, borda, margens,
            etc para deixar o componente com apresentação melhor.  Caso você já trabalhado com HTML e CSS,
            deve está familiarizado com a chamada 'folha de estilos' ou  (em inglês) cascading StyleSheet (CSS).
          </Text>
        </View>
        <View style={{ flex: 3, marginHorizontal: 10, marginVertical: 10, padding: 10, backgroundColor: 'black' }}>
          <Text style={{ marginBottom: 10, fontSize: 20, color: 'blue' }}>Exemplo de Imagens</Text>

          <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image source={require('./image/im1.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
            <Image source={require('./image/im2.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
            <Image source={require('./image/im3.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
          </View >

          <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image source={require('./image/im4.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
            <Image source={require('./image/im5.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
            <Image source={require('./image/im6.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
          </View >

          <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image source={require('./image/im7.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
            <Image source={require('./image/im8.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
            <Image source={require('./image/im9.PNG')}
              style={{ width: 100, height: 100, margin: 10 }} />
          </View>
        </View>
        <View style={{ flex: 3, marginHorizontal: 10, padding: 10, backgroundColor: 'black' }}>
          <Text style={{ marginBottom: 10, fontSize: 20, color: 'blue' }}>Conclusão</Text>
          <Text style={{textAlign:'justify', fontSize:15, color:'green'}}>Exemplo da ultilização de StyleSheet
            em código React-Native</Text>
        </View>
        
      </scrollView>
    );
  }
}
export default App;


/*//---------------------------------------------------------------------------------------
// Desafio 02. Criando uma cost para o titulo e subtitulos

import React, { Component } from 'react';
import { StyleSheet, Text, scrollView, View, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <scrollView>
        <View style={{ flex: 1, padding: 10, backgroundColor: 'powderblue' }}>
          <View style={{ textAlign: 'center' }}>
            <Text style={estilos.titulo}>StyleSheet</Text>
          </View>
          <View style={{ flex: 3, marginHorizontal: 10, padding: 10, backgroundColor: 'black' }}>
            <Text style={estilos.subtitulo}>Introdução</Text>

            <Text style={{ textAlign: 'justify', fontSize: 15, color: 'green' }}>Você já deve ter observado que durante a
              construção dos nossos projetos que, quando inserimos os componentes , utilizamos o props style,
              isto é, incluimos estilos como cor, largura, altura, cor de fundo, borda, margens,
              etc para deixar o componente com apresentação melhor.  Caso você já trabalhado com HTML e CSS,
              deve está familiarizado com a chamada 'folha de estilos' ou  (em inglês) cascading StyleSheet (CSS).
            </Text>
          </View>
          <View style={{ flex: 3, marginHorizontal: 10, marginVertical: 10, padding: 10, backgroundColor: 'black' }}>
            <Text style={estilos.subtitulo}>Exemplo de Imagens</Text>

            <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image source={require('./image/im1.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
              <Image source={require('./image/im2.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
              <Image source={require('./image/im3.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
            </View >

            <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image source={require('./image/im4.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
              <Image source={require('./image/im5.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
              <Image source={require('./image/im6.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
            </View >

            <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image source={require('./image/im7.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
              <Image source={require('./image/im8.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
              <Image source={require('./image/im9.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
            </View>
          </View>
          <View style={{ flex: 3, marginHorizontal: 10, padding: 10, backgroundColor: 'black' }}>
            <Text style={estilos.subtitulo}>Conclusão</Text>
            <Text style={{ textAlign: 'justify', fontSize: 15, color: 'green' }}>Exemplo da ultilização de StyleSheet
              em código React-Native</Text>
          </View>
        </View>
      </scrollView>
    );
  }
}
const estilos =StyleSheet.create({
  subtitulo:{
    marginBottom:10,
    fontSize:20,
    color:'blue'
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  }
});
export default App;

///---------------------------------------------------------------------------------------
// Desafio 03 e 04. Criando uma const para o componente image.

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <scrollView style={{ flex: 1, padding: 10, backgroundColor: 'powderblue' }}>
          <View style={{ textAlign: 'center' }}>
            <Text style={estilos.titulo}>StyleSheet</Text>
          </View>
          <View style={estilos.sub_area}>
            <Text style={estilos.subtitulo}>Introdução</Text>

            <Text style={estilos.paragrafo}>Você já deve ter observado que durante a
              construção dos nossos projetos que, quando inserimos os componentes , utilizamos o props style,
              isto é, incluimos estilos como cor, largura, altura, cor de fundo, borda, margens,
              etc para deixar o componente com apresentação melhor.  Caso você já trabalhado com HTML e CSS,
              deve está familiarizado com a chamada 'folha de estilos' ou  (em inglês) cascading StyleSheet (CSS).
            </Text>
          </View>
          <View style={estilos.sub_area}>
            <Text style={estilos.subtitulo}>Exemplo de Imagens</Text>

            <View style={estilos.sub_area_imagem}>
              <Image source={require('./image/im1.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
              <Image source={require('./image/im2.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
              <Image source={require('./image/im3.PNG')}
                style={{ width: 100, height: 100, margin: 10 }} />
            </View >

            <View style={estilos.sub_area_imagem}>
              <Image source={require('./image/im4.PNG')}
                style={ estilos.figura } />
              <Image source={require('./image/im5.PNG')}
                style={estilos.figura} />
              <Image source={require('./image/im6.PNG')}
                style={estilos.figura} />
            </View >

            <View style={estilos.sub_area_imagem}>
              <Image source={require('./image/im7.PNG')}
                style={estilos.figura} />
              <Image source={require('./image/im8.PNG')}
                style={estilos.figura} />
              <Image source={require('./image/im9.PNG')}
                style={estilos.figura} />
            </View>
          </View>
          <View style={estilos.sub_area}>
            <Text style={estilos.subtitulo}>Conclusão</Text>
            <Text style={estilos.paragrafo}>Exemplo da ultilização de StyleSheet
              em código React-Native</Text>
          </View>
        
      </scrollView>
    );
  }
}
const estilos =StyleSheet.create({
  
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  subtitulo:{
    fontSize:20,
    color:'blue',
    textAlign:'center'
  },
  figura:{
    width:100,
    height:100,
    margin: 10
  },
  paragrafo:{
    textAlign:'justify', 
    fontSize: 15,
    color: 'green'
  },
  sub_area:{
    flex: 3,
    marginHorizontal:10, 
    padding:10,
    backgroundColor:'black'
  },
  sub_area_imagem:{
    marginHorizontal:10,
    flexDirection:'row',
    justifyContent:'space-around'
  }
});
export default App;*///