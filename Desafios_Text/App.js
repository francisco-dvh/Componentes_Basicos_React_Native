/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
    * ///------------------
     / * //-------------------
*/

///---------------------------------------------------------------------
//Componente Texto. 

import React, { Component } from 'react';
import { Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <Text>
        <Text>Oh,  mar salgado! </Text>
        <Text>Quanto do teu sal, </Text>
        <Text>São Lágrimas de Portugal?</Text>
      </Text>

    );
  }
}
export default App;

/*//---------------------------------------------------------------------
//Componente Texto.
//Texto com style.

import React, { Component } from 'react';
import { Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <Text style={{fontFamily:"Arial black"}}>
        <Text style={{fontFamily:"italic"}}>Oh,  mar salgado!{"\n"} </Text>
        <Text style={{fontSize:20}}>Quanto do teu sal,{"\n"} </Text>
        <Text style={{color:"red"}}>São Lágrimas de Portugal?</Text>
      </Text>

    );
  }
}
export default App;

///---------------------------------------------------------------------
//Componente Texto.
//Usando Variáveis.

import React, { Component } from 'react';
import { Text } from 'react-native';

class App extends Component {
  render() {
    var nome = 'Francisco.';
    return (

      <Text>Meu nome, é {nome}</Text>


    );
  }
}
export default App;

///---------------------------------------------------------------------
//Componente Texto.
//Usando Variáveis.

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    var primeiro_nome = 'Francisco ';
    var sobrenome = 'Mendes.'
    var nome_completo;
    nome_completo = primeiro_nome + " " + sobrenome;
    return (

      <view>
        <Text style={{ color: "red" }}>Maneira 1: {"\n"}: </Text>
        <Text>Meu nome, é  {nome_completo} {"\n"}</Text>
        <Text style={{ color: "red" }}>Maneira 2:  {"\n"}</Text>
        <Text> Meu nome, é {primeiro_nome} {sobrenome}</Text>
      </view>


    );
  }
}
export default App;

///---------------------------------------------------------------------
//Componente Texto.
//Usando IFs e ELSEs.

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    let parte;
    let Poema_p1 = "Oh mar salgado! \nQuanto do teu sal \n São lágrimas de Portugal?";
    let Poema_p2 = "Valeu apena? \nTudo vale a pea \nQuando a alma nao é pequena!"
    parte = 1;
    if (parte == 1) {
      return (
        <View>
          <Text>{Poema_p1}</Text>
        </View>
      );
    }
    else {
      return (
        <View>
          <Text>{Poema_p2}</Text>
        </View>
      );
    }
  }
}
export default App;

///---------------------------------------------------------------------
//Componente Texto.
//Usando laço FOR e WHITE.

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    let parte, nota = true, texto = "teste de contador ";
    let Poema_p1 = "Oh mar salgado! \nQuanto do teu sal \n São lágrimas de Portugal?";
    let Poema_p2 = "Valeu apena? \nTudo vale a pea \nQuando a alma nao é pequena!"
    parte = 1;
    for (let contador = 0; contador < 3; contador++) {
      texto = texto + "" + contador;
    }
    if (parte == 1 && nota) {
      return (
        <View>
          <Text>{Poema_p1}</Text>
        </View>
      );
    }
    else {
      let cont = 0;
      while (cont < 5) {
        cont++;
      }
      return (
        <View>
          <Text>{Poema_p2}</Text>
        </View>
      );
    }
  }
}
export default App; *///