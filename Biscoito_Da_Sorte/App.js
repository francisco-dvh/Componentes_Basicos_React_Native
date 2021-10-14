
/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/


///---------------------------------------------------------------------------
//App Biscoito da Sorte....Desafio 1.
///---------------------------------------------------------------------------
//Aula07....Desafio 01. 


import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_titulo}>
          <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
        </View>
        <View style={estilos.area_img}>
          <Image source={require('./image/Biscoito.PNG')}
            style={estilos.img} />
        </View>
        <View style={{ flex: 0.3 }}>
          <Text style={estilos.Texto_frase}>
            'Alguma frase aqui...'{'\n'}'MENDES'
          </Text>
          <TouchableOpacity style={estilos.botao}>
            <View style={estilos.area_botao}>
              <Text style={estilos.texto_botao}>Quebrar Biscoito</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  area_titulo: {
    height: 70,
    width: 380,
    backgroundColor: 'orange',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  Texto_frase: {
    color: 'darkblue',
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 30,
    textAlign: 'center'
  },
  area_img: {
    flex: 1,
    justifyContent: 'center'
  },
  img: {
    width: 300,
    height: 300,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 25
  },
  area_botao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto_botao: {
    fontWeight: 'bold',
    color: 'orange'
  }
});
export default App;

/*//---------------------------------------------------------------------------
//App Biscoito da Sorte....Desafio 1.
///---------------------------------------------------------------------------
//Aula07....Desafio 02. 


import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_titulo}>
          <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
        </View>
        <View style={estilos.area_img}>
          <Image source={require('./image/Biscoito.PNG')}
            style={estilos.img} />
        </View>
        <View style={{ flex: 0.3 }}>
          <Text style={estilos.Texto_frase}>
            'Alguma frase aqui...'
          </Text>
          <TouchableOpacity style={estilos.botao}>
            <View style={estilos.area_botao}>
              <Image source={require('./image/Btn_icone_01.PNG')}
                style={{ marginRight: 20, width: 40, height: 40 }} />

              <Text style={estilos.texto_botao}>Quebrar Biscoito</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  area_titulo: {
    height: 70,
    width: 380,
    backgroundColor: 'orange',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  Texto_frase: {
    color: 'darkblue',
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 30,
    textAlign: 'center'
  },
  area_img: {
    flex: 1,
    justifyContent: 'center'
  },
  img: {
    width: 300,
    height: 300,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 25
  },
  area_botao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto_botao: {
    fontWeight: 'bold',
    color: 'orange'
  }
});
export default App;

///---------------------------------------------------------------------------
//Aula07....Desafio 03.




import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Texto_frase: '',
      texto_botao: 'Quebrar Biscoito',
      img: require('./image/Biscoito.PNG')
    }
    this.quebra_biscoito = this.quebra_biscoito.bind(this);
    //array de frases
    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a maior distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz',
      'Realize o ódvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres,  mas não dependa deles.',
      'A amior barreira para o sucesso é p medo do fracasso.',
      'O dinheiro não é tudo. Não se esqueça também do ouro, dos diamantes, da platina e das propriedades'
    ];
  };
  quebra_biscoito() {
    let num_Aleatorio = Math.floor(Math.random() * this.frases.length);
    if (this.state.texto_botao != 'Nova Tentativa') {
      this.setState({
        Texto_frase: ' "' + this.frases[num_Aleatorio] + '"',
        img: require('./image/BiscoitoAberto.PNG'),
        texto_botao: 'Nova Tentativa'
      })
    }
    else {
      this.setState({
        Texto_frase: '',
        img: require('./image/Biscoito.PNG'),
        texto_botao: 'Quebrar Biscoito'
      })
    }
  }
  render() {
    return (
      <View style={estilos.area_fundo}>
        <View style={estilos.area_titulo}>
          <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
        </View>
        <View style={estilos.area_img}>
          <Image source={this.state.img}
            style={estilos.img} />
        </View>
        <View style={{ flex: 0.3 }}>
          <Text style={estilos.Texto_frase}>
            {this.state.Texto_frase}
          </Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={estilos.botao} onPress = {this.quebra_biscoito}>
            <View style={estilos.area_botao}>
              <Image source={require('./image/Btn_icone_01.PNG')}
                style={{ marginRight: 20, width: 40, height: 40 }} />
              <Text style={estilos.texto_botao}>{this.state.texto_botao}</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  area_titulo: {
    height: 70,
    width: 380,
    backgroundColor: 'orange',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  Texto_frase: {
    color: 'darkblue',
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 30,
    textAlign: 'center'
  },
  area_img: {
    flex: 1,
    justifyContent: 'center'
  },
  img: {
    width: 300,
    height: 300,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 25
  },
  area_botao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto_botao: {
    fontWeight: 'bold',
    color: 'orange'
  }
});
export default App;

*///---------------------------------------------------------------------------
