
/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


///---------------------------------------------------------------------------
//Componente FlatList....Desafio 01.
/*//---------------------------------------------------------------------------
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_cabecalho}>
          <Image source={require('./image/logo.PNG')}
            style={{ width: 50, height: 50, marginHorizontal: 5 }} />
          <View>
            <Text style={estilos.titulo}>AULA 08 - DESAFIO 01-MENDES</Text>
            <Text style={estilos.sub_titulo}>Componente flatList</Text>
          </View >
        </View >
        <View style={estilos.area_lista}>
          <Text style={{ alignSelf: 'center' }}>{'\n'}Area da lista</Text>
        </View>
      </View >
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  area_cabecalho: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  area_lista: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  titulo: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'orange',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 5
  },
  sub_titulo: {
    color: 'blue',
    fontSize: 25,
    fontStyle: 'italic',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'darkorange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 1,
    marginHorizontal: 5
  },
  item_FlatLista: {
    padding: 10,
    fontSize: 18,
    height: 40
  }
});
export default App;

///---------------------------------------------------------------------------
//Componente FlatList....Desafio 02.


import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.mostra_dados = this.mostra_dados.bind(this);
  };
  mostra_dados({item})
  {
    return(
      <Text>{item}</Text>
    );
  }
  render() {
    let fonte_de_dados = ['Francisco', 'Heloisa', 'Ciane'];
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_cabecalho}>
          <Image source={require('./image/logo.PNG')}
            style={{ width: 50, height: 50, marginHorizontal: 5 }} />
          <View>
            <Text style={estilos.titulo}>AULA 08 - DESAFIO 01-MENDES</Text>
            <Text style={estilos.sub_titulo}>Componente flatList</Text>
          </View >
        </View >
        <View style={estilos.area_lista}>
          <Text style={{ alignSelf: 'center' }}>{'\n'}Area da lista</Text>
          <FlatList
            data={fonte_de_dados}
            renderItem={this.mostra_dados} />
        </View>
      </View >
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  area_cabecalho: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  area_lista: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  titulo: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'orange',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 5
  },
  sub_titulo: {
    color: 'blue',
    fontSize: 25,
    fontStyle: 'italic',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'darkorange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 1,
    marginHorizontal: 5
  },
  item_FlatLista: {
    padding: 10,
    fontSize: 18,
    height: 40
  }
});
export default App;
///---------------------------------------------------------------------------

///----------------------------------------------------------------------------
//Componente FlatList....Desafio 03.
//Arrays de Dados.

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.mostra_dados = this.mostra_dados.bind(this);
  };
  mostra_dados({item})
  {
    return(
      <View>
        <Text>{item.nome}</Text>
        <Text>{item.email}</Text>
        <Text>{item.curso}</Text>
        <Text>{item.foto}</Text>
      </View>
    );
  }
  render() {
    let fonte_de_dados = [
      {nome: 'Francisco Mendes', email: 'Franciscofdsmh@gmail.com',
         curso:'Sistema de Informação', foto: './image/pessoa1.PNG'},
      {nome: 'Fabiana Carraro', email: 'fabiana@fabiana.com.br',
         curso: 'Redes de Computadores', foto: './image/pessoa2.PNG'},
      {nome: 'Fernando Azambuja', email: 'fernando@fernando.com.br', 
         curso: 'Tecnologia da Informação', foto: './image/pessoa3.PNG'}   
    ];
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_cabecalho}>
          <Image source={require('./image/logo.PNG')}
            style={{ width: 50, height: 50, marginHorizontal: 5 }} />
          <View>
            <Text style={estilos.titulo}>AULA 08 - DESAFIO 01-MENDES</Text>
            <Text style={estilos.sub_titulo}>Componente flatList</Text>
          </View >
        </View >
        <View style={estilos.area_lista}>
          <Text style={{ alignSelf: 'center' }}>{'\n'}Area da lista</Text>
          <FlatList
            data={fonte_de_dados}
            renderItem={this.mostra_dados} />
        </View>
      </View >
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  area_cabecalho: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  area_lista: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  titulo: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'orange',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 5
  },
  sub_titulo: {
    color: 'blue',
    fontSize: 25,
    fontStyle: 'italic',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'darkorange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 1,
    marginHorizontal: 5
  },
  item_FlatLista: {
    padding: 10,
    fontSize: 18,
    height: 40
  }
});
export default App;
///---------------------------------------------------------------------------

///----------------------------------------------------------------------------
//Componente FlatList....Desafio 03.1.
//Separador.

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.mostra_dados = this.mostra_dados.bind(this);
  };
  mostra_dados({item})
  {
    return(
      <View>
        <Text>{item.nome}</Text>
        <Text>{item.email}</Text>
        <Text>{item.curso}</Text>
        <Text>{item.foto}</Text>
        <View style = {estilos.separador}/>
      </View>
    );
  }
  render() {
    let fonte_de_dados = [
      {nome: 'Francisco Mendes', email: 'Franciscofdsmh@gmail.com',
         curso:'Sistema de Informação', foto: './image/pessoa1.PNG'},
      {nome: 'Fabiana Carraro', email: 'fabiana@fabiana.com.br',
         curso: 'Redes de Computadores', foto: './image/pessoa2.PNG'},
      {nome: 'Fernando Azambuja', email: 'fernando@fernando.com.br', 
         curso: 'Tecnologia da Informação', foto: './image/pessoa3.PNG'}  
    ];
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_cabecalho}>
          <Image source={require('./image/logo.PNG')}
            style={{ width: 50, height: 50, marginHorizontal: 5 }} />
          <View>
            <Text style={estilos.titulo}>AULA 08 - DESAFIO 01-MENDES</Text>
            <Text style={estilos.sub_titulo}>Componente flatList</Text>
          </View >
        </View >
        <View style={estilos.area_lista}>
          <Text style={{ alignSelf: 'center' }}>{'\n'}Area da lista</Text>
          <FlatList
            data={fonte_de_dados}
            renderItem={this.mostra_dados} />
        </View>
      </View >
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  separador:{
    height:2,
    backgroundColor:'#fff',
    marginLeft:'5'
  },
  area_cabecalho: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  area_lista: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  titulo: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'orange',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 5
  },
  sub_titulo: {
    color: 'blue',
    fontSize: 25,
    fontStyle: 'italic',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'darkorange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 1,
    marginHorizontal: 5
  },
  item_FlatLista: {
    padding: 10,
    fontSize: 18,
    height: 40
  }
});
export default App;
*///---------------------------------------------------------------------------

///----------------------------------------------------------------------------
//Componente FlatList....Desafio 03.2.
//Mostrando a imagem do aluno. Posicionamento (LAYOUT).

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.mostra_dados = this.mostra_dados.bind(this);
  };
  mostra_dados({ item }) {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginBottom: 10
        }}>
          <Image source={item.foto}
            style={{
              width: 50,
              height: 60,
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 10,
              alignItems: 'center'
            }} />
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: 'bold' }}> {item.nome}</Text>
            <Text>{item.email}</Text>
            <Text style={{ color: 'darkblue' }}>{item.curso}</Text>
          </View>
        </View>
        <View style={estilos.separador}/>
      </View>
    );
  }
  render() {
    let fonte_de_dados = [
      {
        nome: 'Francisco Mendes', email: 'Franciscofdsmh@gmail.com',
        curso: 'Sistema de Informação', foto: require('./image/pessoa1.PNG')
      },
      {
        nome: 'Fabiana Carraro', email: 'fabiana@fabiana.com.br',
        curso: 'Redes de Computadores', foto: require('./image/pessoa2.PNG')
      },
      {
        nome: 'Fernando Azambuja', email: 'fernando@fernando.com.br',
        curso: 'Tecnologia da Informação', foto: require('./image/pessoa3.PNG')
      }
    ];
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_cabecalho}>
          <Image source={require('./image/logo.PNG')}
            style={{ width: 50, height: 50, marginHorizontal: 5 }} />
          <View>
            <Text style={estilos.titulo}>AULA 08 - DESAFIO 01-MENDES</Text>
            <Text style={estilos.sub_titulo}>Componente flatList</Text>
          </View >
        </View >
        <View style={estilos.area_lista}>
          <Text style={{ alignSelf: 'center' }}>{'\n'}Area da lista</Text>
          <FlatList
            data={fonte_de_dados}
            renderItem={this.mostra_dados} />
        </View>
      </View >
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  separador: {
    height: 2,
    backgroundColor: '#fff',
    marginLeft: '5'
  },
  area_cabecalho: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  area_lista: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  titulo: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'orange',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 5
  },
  sub_titulo: {
    color: 'blue',
    fontSize: 25,
    fontStyle: 'italic',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'darkorange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 1,
    marginHorizontal: 5
  },
  item_FlatLista: {
    padding: 10,
    fontSize: 18,
    height: 40
  }
});
export default App;
///---------------------------------------------------------------------------