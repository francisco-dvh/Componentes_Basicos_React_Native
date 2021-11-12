/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


/*//---------------------------------------------------------------------------
//InstaUSC....Desafio 1. Primeiro Passo.
///---------------------------------------------------------------------------
//Aula08....Desafio 01. 


import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <Image source={require('./image/insta_logo.PNG')}
          style={{ height: 100, width: 100 }} />
        <Text style={{ fontSize: 40, fontStyle: 'italic' }}>Insta
          <Text style={{ fontStyle: 'normal', fontWeight: 'bold' }}>USC</Text>
        </Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default App;

///---------------------------------------------------------------------------
//Aula08....Desafio 02. 
//InstaUSC..... Primeiro Passo.


import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      //View interna para acomodar o cabeçalho do APP
      <View style={estilos.area_fundo}>
        <Text>.........</Text>
        <Text>Esta é a área de fundo</Text>
        <Text>Sobre esta área será montada a estrutura do App {'\n'}MENDES</Text>
        <Text>.........</Text>
        {/*View interna para acomodar o cabeçalho do App *//*apagar "/*"}   
<View style={estilos.area_header}>
<Text>esta é a área do cabeçalho do InstaUSC</Text>
<Text>Deve ficar dentro do componente View
que representa a Área de fundo</Text>
</View>
{/* View para apresentar cada um dos posts que formam o feed*//*apagar"/*"}  
<View style={estilos.area_feed}>
  <Text>.......</Text>
  <Text>Esta é a área onde todos os posts serão apresentados</Text>
  <Text>Esta área repetida conforme o número de posts do feed</Text>
  <Text>.......</Text>
  <Text>É chamada de área dos feeds</Text>
  <Text>........</Text>
</View>
{/* View interna para acomodar o Rodapé do App */ /*apagar "/*"}                
<View style={estilos.area_footter}>
  <Text>Esta é a área do Rodapé do InstaUSC</Text>
  <Text>Deve ficar dentro do componente View
    que representa a Área de fundo</Text>
</View>
<Text>.......</Text>
<Text>Continuação da área de fundo</Text>
<Text>........</Text>
</View>
);
}
}

const estilos = StyleSheet.create({
area_fundo: {
flex: 1,
backgroundColor: '#fff',
marginTop: 35,
},
area_header: {
backgroundColor: 'red',
},
area_feed: {
backgroundColor: 'green'
},
area_footter: {
backgroundColor: 'skyblue'
}
});
export default App;



///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 2.2. 
//Segundo Passo. criando o componente Feed.


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/componentes/Feed';


class App extends Component {
  render() {
    return (
      //View interna para acomodar o cabeçalho do APP
      <View style={estilos.area_fundo}>
        <Text>.........</Text>
        <Text>Esta é a área de fundo</Text>
        <Text>Sobre esta área será montada a estrutura do App {'\n'}MENDES</Text>
        <Text>.........</Text>
        {/*View interna para acomodar o cabeçalho do App *//*Apagar"/*}
<View style={estilos.area_header}>
<Text>esta é a área do cabeçalho do InstaUSC</Text>
<Text>Deve ficar dentro do componente View
que representa a Área de fundo</Text>
</View>
{/* View para apresentar cada um dos posts que formam o feed*//*Apagar"/*}
<Feed />

{/* View interna para acomodar o Rodapé do App *//*Apagar"/*}
<View style={estilos.area_footter}>
  <Text>Esta é a área do Rodapé do InstaUSC</Text>
  <Text>Deve ficar dentro do componente View
    que representa a Área de fundo</Text>
</View>
<Text>.......</Text>
<Text>Continuação da área de fundo</Text>
<Text>........</Text>
</View>
);
}
}

const estilos = StyleSheet.create({
area_fundo: {
flex: 1,
backgroundColor: '#fff',
marginTop: 35,
},
area_header: {
backgroundColor: 'red',
},
area_footter: {
backgroundColor: 'skyblue'
}
});
export default App;

///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 03. 
//Primeiro e segundo Passo. Detalhando o layout do componente Feed.

//Para testa este desafio, e necéssario  tirar o código da pasta Feed "NO ARQUIVO INDES.JS"de comentários.
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/componentes/Feed';


class App extends Component {
render() {
return (
//View interna para acomodar o cabeçalho do APP
<View style={estilos.area_fundo}>
<Text>.........</Text>
<Text>Esta é a área de fundo</Text>
<Text>Sobre esta área será montada a estrutura do App {'\n'}MENDES</Text>
<Text>.........</Text>
{/*View interna para acomodar o cabeçalho do App *//*Apagar "/*"}
<View style={estilos.area_header}>
  <Text>esta é a área do cabeçalho do InstaUSC</Text>
  <Text>Deve ficar dentro do componente View
    que representa a Área de fundo</Text>
</View>
{/* View para apresentar cada um dos posts que formam o feed*//*Apagar"/*}
<Feed />

{/* View interna para acomodar o Rodapé do App *//*Apagar"/*}
<View style={estilos.area_footter}>
  <Text>Esta é a área do Rodapé do InstaUSC</Text>
  <Text>Deve ficar dentro do componente View
    que representa a Área de fundo</Text>
</View>
<Text>.......</Text>
<Text>Continuação da área de fundo</Text>
<Text>........</Text>
</View>
);
}
}

const estilos = StyleSheet.create({
area_fundo: {
flex: 1,
backgroundColor: '#fff',
marginTop: 35,
},
area_header: {
backgroundColor: 'red',
},
area_footter: {
backgroundColor: 'skyblue'
}
});
export default App;

///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 03. 
//Terceiro  Passo. Finalizando a estrutura geral de Views..

//Para testa este desafio, e necéssario  tirar o código da pasta Feed "NO ARQUIVO INDES.JS"de comentários.

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/componentes/Feed';


class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_header}>
          <Text>Cabeçalho do InstaUSC</Text>
        </View>
        {/* linha para dicidir o cabeçalho do App do  cabeçalho do feed*//*Apagar "/*"}
<View style={{ height: 1, backgroundColor: 'gray' }}></View>
{/*Chamada do componente Feed *//*Apagar "/*"}
<Feed />
<View style={estilos.area_footter}>
  <Text> Rodapé do InstaUSC</Text>
</View>
</View>
);
}
}

const estilos = StyleSheet.create({
area_fundo: {
flex: 1,
backgroundColor: '#fff',
marginTop: 35,
},
area_header: {
backgroundColor: 'red',
},
area_footter: {
backgroundColor: 'skyblue'
}
});
export default App;

///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 04. 
//Primeiro Passo. Importando as imagens.//segundo passo  definindo o Layout interno do cabeçalho

//Para testa este desafio, e necéssario  tirar o código da pasta Feed "NO ARQUIVO INDES.JS"de comentários.

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Feed from './src/componentes/Feed';


class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={{ width: 140, height: 55 }}
              resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./src/img/instaUSB_logo.png')}
              style={{ width: 50, height: 50 }}
              resizeMode='contain' />
          </TouchableOpacity>
        </View>
        {/* linha para dicidir o cabeçalho do App do  cabeçalho do feed*//*Apagar "/*"}
<View style={{ height: 1, backgroundColor: 'gray' }}></View>
{/*Chamada do componente Feed *//*Apagar "/*"}
<Feed />
<View style={estilos.area_footter}>
  <Text> Rodapé do InstaUSC</Text>
</View>
</View>
);
}
}

const estilos = StyleSheet.create({
area_fundo: {
flex: 1,
backgroundColor: '#eee',
padding: 40
},
area_header: {
paddingHorizontal: 10,
flexDirection: 'row',
justifyContent: 'space-between'
},
area_footter: {
backgroundColor: 'skyblue'
}
});
export default App;

*///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 05/06/07/08/09 
//O cabeçalho de cada postagem...primeiroe segundo passo -identificando e adicinando os elementos

//Para testa este desafio, e necéssario  tirar o código da pasta Feed "NO ARQUIVO INDES.JS"de comentários.

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Feed from './src/componentes/Feed';


class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={{ width: 140, height: 55 }}
              resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./src/img/instaUSB_logo.png')}
              style={{ width: 50, height: 50 }}
              resizeMode='contain' />
          </TouchableOpacity>
        </View>
        {/* linha para dicidir o cabeçalho do App do  cabeçalho do feed*/}
        <View style={{ height: 1, backgroundColor: 'gray' }}></View>
        {/*Chamada do componente Feed */}
        <Feed />
        {/* área do rodapé do app*/}
        <View style={estilos.area_footer}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/instaUSC_logo.png')}
              style={{ width: 50, height: 50 }}
              resizeMode='contain' />
          </TouchableOpacity>
          <View style ={{paddingLeft:'10'}}>
            <Text style = {{fontWeight:'bold'}}>InstaUSC... dev. by LUIZ CORCINI{'\n'} ALUNO : FRANCISCO MENDES</Text>
            <Text style = {{fontWeight:'bold'}}>UniSantaCruz - 2021</Text>
          </View>
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 40
  },
  area_header: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  area_footer: {
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'orange',
    paddingHorizontal:10,
    justifyContent:'space-between'
  }
});
export default App;