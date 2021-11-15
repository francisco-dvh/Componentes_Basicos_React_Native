/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


/*//---------------------------------------------------------------------------
//Desafio 1.
///---------------------------------------------------------------------------
//Aula08..SelectionList. 

import React, { Component } from 'react';
import { Platform, Image, StyleSheet, Text, View, SectionList, Alert } from 'react-native';
class App extends Component {
  render() {
    const logo = 'https://unisantacruz.edu.br/wp-content/uploads/2020/07/' +
      'cropped-logo_vH_aplicreduzida.png';
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_cabecalho}>
          <Image
            source={{ uri: logo }}
            style={estilos.logo}
            resizeMode='stretch' />
        </View>
        <View style={estilos.area_corpo}>
          <Text style={estilos.texto_nome_disc}>Desenvolvimento MOBILE</Text>
          <Text style={estilos.texto_nome_capitulo}>SECTION LIST</Text>
        </View>
        <View style={estilos.area_rodape}>
          <Text>Prof. Luiz Corcini</Text>
          <Text>Aluno. Francisco Mendes</Text>
          <Text>2021</Text>
        </View>
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
  area_cabecalho:{
    flex: 2,
    paddingTop:65,
    width:'100%',
    alignItems:'center',
    backgroundColor:'white'
  },
  area_corpo:{
    flex:4,
    width:'90%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius:190
  },
  texto_nome_disc:{
    fontWeight: 'bold',
    fontSize:20
  },
  texto_nome_capitulo:{
    fontSize:45,
    color: 'darkblue'
  },
  area_rodape:{
    flex:3,
    paddingBottom:20,
    backgroundColor:  'white',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo:{
    width:350,
    height:120,
    borderRadius:25,
    borderColor:'black'
  }
});
export default App;

///---------------------------------------------------------------------------
//Desafio 02.
///---------------------------------------------------------------------------
//Aula08..SelectionList. 

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';

class App extends Component {
  render() {
    var Titulos = ['titulo1', 'titulo2'];
    var Conteudos = [
      ['nome1', 'nome2', 'nome3'],
      ['nome4', 'nome', 'nome']
    ];
    const logo = 'https://unisantacruz.edu.br/wp-content/uploads/2020/07/' +
      'cropped-logo_USC_vH_aplicreduzida.png';
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_cabecalho}>
          <Image
            source={{ uri: logo }}
            style={estilos.logo}
            resizeMode='stretch' />

          <Text style={estilos.sub_titulo}>Desenvolvimento Mobile</Text>
        </View>
        <View style={{ backgroundColor: 'gray', height: 5 }}></View>
        <View style={estilos.area_corpo}>
          <SectionList
            sections={[
              { title: Titulos[0], data: Conteudos[0] },
              { title: Titulos[1], data: Conteudos[1] }
            ]}
            renderItem={this.mostra_Dados}
            renderSectionHeader={this.mostra_Cab_Secao}
            keyExtractor={(item, index) => index} />
        </View >
      </View>
    );
  }

  mostra_Dados({ item }) {
    return (
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }}>{item}</Text>
      </View>
    );
  };
  mostra_Cab_Secao({ section }) {
    return (
      <TouchableOpacity
        onPress={() => alert(section.title)}>
        <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{section.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}



const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  area_cabecalho: {
    flex: 0.5,
    marginTop: 35,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
    borderColor:'gray',
    borderWidth: 2,
    width: '95%'
  },
  logo: {
    width: 350,
    height: 100,

  },
  area_corpo: {
    flex: 2,
    backgroundColor: 'lightgray',
    width: '95%'
  },
  
  sub_titulo: {
    marginTop: 0.5,
    fontWeight: 'bold'
  }
});
export default App;


*///---------------------------------------------------------------------------
//Desafio 02.
///---------------------------------------------------------------------------
//Aula08..SelectionList. 

import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';

class App extends Component {
  render() {
    const AMÉRICA_DO_SUL = [
      { id: 1, title: 'Brasil ' },
      { id: 2, title: 'Agentina ' },
      { id: 3, title: 'Peru ' }
    ]
    const AMÉRICA_CENTRAL = [
      { id: 4, title: 'Cuba ' },
      { id: 5, title: 'Haiti ' },
      { id: 6, title: 'Granada ' },
      { id: 7, title: 'Lamaica ' },
      { id: 8, title: 'Belize ' },
      { id: 9, title: 'Panamá ' },
      { id: 10, title: 'Costa Rica ' },
      { id: 11, title: 'Bahamas ' }
    ]

    const EUROPA = [
      { id: 12, title: 'Portugal ' },
      { id: 12, title: 'Espanha ' },
      { id: 13, title: 'Itália ' },
      { id: 14, title: 'Suiça ' },
    ]
    return (
      <View style={estilos.area_fundo}>
         <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold',  }}>Francisco Mendes</Text>
        
        <SectionList
          sections={[
            { title: 'AMÉRICA DO SUL', data: AMÉRICA_DO_SUL },
            { title: 'AMÉRICA CENTRAL', data: AMÉRICA_CENTRAL },
            { title: 'EUROPA', data: EUROPA }
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => alert(item.title)}>
            <View style={estilos.paises}>
              <Text style = {estilos.paises_font}>
                {item.title}
              </Text>
            </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <View style={estilos.continente}>
              <Text style={estilos.cont_font}>
                {section.title}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

      </View>
    )
  }
}


const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
 

  },
  continente: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,



  },
  cont_font: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange'

  },
  paises: {
    alignItems: 'center',
  
 borderBottomColor:'#f3f3f3',
 borderBottomWidth:1,
 backgroundColor:'skyblue'
    

  },
paises_font:{
  fontSize: 20,
    fontWeight: 'bold',
    color:'gray'

}

});
export default App;
