import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Tela_principal({ navigation }) {
  return (
    <View style={estilos.area_fundo_HOME}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./img/logo.png')}
          style={{ height: 190, width: 300, marginTop: 20, borderRadius: 20 }} />
        <Text style={estilos.titulo}>UNISANTACRUZ</Text>
        <Text style={estilos.sub_titulo}>DESENVOLVIMENTO MOBILE</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, paddingBottom: 20 }} onPress={() => navigation.navigate('Ementa')}>
          Ementa do Curso</Text>
        <Text style={{ fontSize: 20, }} onPress={() => navigation.navigate('Professor')}>
          Professor</Text>
        <Text style={{ fontSize: 20, }} onPress={() => navigation.navigate('Aluno')}>
          Aluno</Text>
      </View>
    </View>

  );
}

function Ementa() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 30 }}>
        <Text style={estilos.titulo_ementa}>Ementa do Curso</Text>
        <Text style={estilos.topicos}>1.Introdução ao React Native</Text>
        <Text style={estilos.topicos}>2. configuração do Ambiente de Desenvolvimento</Text>
        <Text style={{ marginLeft: 20 }}>VSCode</Text>
        <Text style={{ marginLeft: 20 }}>Expo CLI</Text>
        <Text style={{ marginLeft: 20 }}>Node.JS</Text>
        <Text style={{ marginLeft: 20 }}>Expo Go</Text>
        <Text style={estilos.topicos}>3. Componentes Básicos</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'Text'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'View'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'Image'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'ScrollView'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'TouchableHightlight'</Text>
        <Text style={estilos.topicos}>4. Grupos de Estilo</Text>
        <Text style={estilos.topicos}>5. Componente de Interface</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'TextInput'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'Buttton'</Text>
        <Text style={{ marginLeft: 20 }}>App Biscoito da sorte'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'Picker'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'Slider'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'Switch'</Text>
        <Text style={estilos.topicos}>5. Componentes de Lista</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'FlatList'</Text>
        <Text style={{ marginLeft: 40 }}>App InstaUSC</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'SectionList'</Text>
        <Text style={estilos.topicos}>6. Navegação entre Telas</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'Modal'</Text>
        <Text style={{ marginLeft: 20 }}>Componente 'Navigation'</Text>
        <Text style={estilos.topicos}>7. Distribuição de Apps </Text>

      </View>
    </ScrollView>
  )
}

function Professor() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 30 }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image source={require('./img/pessoa3.png')}
            style={{ width: 100, height: 100, borderRadius: 50 }}></Image>
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 30 }}>
          <Text style={{ fontSize: 20 }}>Luiz Fernando Corcini</Text>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text>Graduação: Eng. Eletrônica</Text>
        <Text>Especialista: Adm de T.I</Text>
        <Text>Mestrado: Novas mídias aplicadas à Educação</Text>
      </View>
    </View>
  )
}

function Aluno() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 30 }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image source={require('./img/pessoa1.PNG')}
            style={{ width: 100, height: 100, borderRadius: 50 }}></Image>
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 30 }}>
          <Text style={{ fontSize: 20 }}>Francisco Mendes</Text>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text>Graduação: Sistema de Informação</Text>

      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' Component={Tela_principal} />
          <Stack.Screen name='Ementa' Component={Ementa} />
          <Stack.Screen name='Professor' Component={Professor} />
          <Stack.Screen name='Aluno' Component={Aluno} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const estilos = StyleSheet.create({
  area_fundo_HOME: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  sub_titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkorange'
  },
  titulo_ementa: {
    fontWeight: 'bold',
    paddingBottom: 30,
    fontSize: 20
  },
  topicos: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  }
});
export default App;