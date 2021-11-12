/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
     * ///------------------
     / * //-------------------
*/

/*//---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 03. 
//Primeiro e Segundo  Passo. Detalhando o layout do componente Feed.

import React, { Component } from 'react';
import { View, Text, FlatList, image, StyleSheet, TouchableOpacity } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { id: '1' },
            ]
        };
        this.mostra_Dados = this.mostra_Dados.bind(this)
    }
    mostra_Dados({ item: postagem }) {
        return (
            <View style={estilos.area_feed}>
                <View style={estilos.area_post_header}>
                    <Text>Cab publicação</Text>
                </View>
                <View style={estilos.area_post_imag}>
                    <Text>imag publicação</Text>
                </View>
                <View style={estilos.area_post_botoes}>
                    <Text>botões publicação</Text>
                </View>
                <View style={estilos.area_post_likes}>
                    <Text>likes publicação</Text>
                </View>
                <View style={estilos.area_post_footer}>
                    <Text>Rodapé publicação</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.posts}
                renderItem={this.mostra_Dados} />
        );
    }
}
const estilos = StyleSheet.create({
    area_feed: {
        backgroundColor: 'yellow'
    },
    area_post_header: {
        backgroundColor: 'orange'
    },
    area_post_imag: {
        backgroundColor: 'red'
    },
    area_post_botoes: {
        backgroundColor: 'green'
    },
    area_post_likes: {
        backgroundColor: 'blue',
    },
    area_post_footer: {
        backgroundColor: 'grey'
    }

});
export default Feed;

///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 03. 
//Terceiro  Passo. Finalizando a estrutura geral de Views.

import React, { Component } from 'react';
import { View, Text, FlatList, image, StyleSheet, TouchableOpacity } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { id: '1' },
                { id: '1' },
                { id: '1' },
                { id: '1' },
            ]
        };
        this.mostra_Dados = this.mostra_Dados.bind(this)
    }
    mostra_Dados({ item: postagem }) {
        return (
            <View style={estilos.area_feed}>
                <View style={estilos.area_post_header}>
                    <Text>Cab publicação</Text>
                </View>
                <View style={estilos.area_post_imag}>
                    <Text>imag publicação</Text>
                </View>
                <View style={estilos.area_post_botoes}>
                    <Text>botões publicação</Text>
                </View>
                <View style={estilos.area_post_likes}>
                    <Text>likes publicação</Text>
                </View>
                <View style={estilos.area_post_footer}>
                    <Text>Rodapé publicação</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.posts}
                renderItem={this.mostra_Dados} />
        );
    }
}
const estilos = StyleSheet.create({
    area_feed: {
        backgroundColor: 'yellow'
    },
    area_post_header: {
        backgroundColor: 'orange'
    },
    area_post_imag: {
        backgroundColor: 'red'
    },
    area_post_botoes: {
        backgroundColor: 'green'
    },
    area_post_likes: {
        backgroundColor: 'blue',
    },
    area_post_footer: {
        backgroundColor: 'grey'
    }

});
export default Feed;

///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 04. 
//Primeiro Passo. Importando as imagens..

import React, { Component } from 'react';
import { View, Text, FlatList, image, StyleSheet, TouchableOpacity } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { id: '1' },
                { id: '1' },
                { id: '1' },
                { id: '1' },
            ]
        };
        this.mostra_Dados = this.mostra_Dados.bind(this)
    }
    mostra_Dados({ item: postagem }) {
        return (
            <View style={estilos.area_feed}>
                <View style={estilos.area_post_header}>
                    <Text>Cab publicação</Text>
                </View>
                <View style={estilos.area_post_imag}>
                    <Text>imag publicação</Text>
                </View>
                <View style={estilos.area_post_botoes}>
                    <Text>botões publicação</Text>
                </View>
                <View style={estilos.area_post_likes}>
                    <Text>likes publicação</Text>
                </View>
                <View style={estilos.area_post_footer}>
                    <Text>Rodapé publicação</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.posts}
                renderItem={this.mostra_Dados} />
        );
    }
}
const estilos = StyleSheet.create({
    area_feed: {
        backgroundColor: 'yellow'
    },
    area_post_header: {
        backgroundColor: 'orange'
    },
    area_post_imag: {
        backgroundColor: 'red'
    },
    area_post_botoes: {
        backgroundColor: 'green'
    },
    area_post_likes: {
        backgroundColor: 'blue',
    },
    area_post_footer: {
        backgroundColor: 'grey'
    }

});
export default Feed;

///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 05. 
//O cabeçalho de cada postagem...primeiro, segundo, terceiro e quarto passo -identificando e adicinando os elementos

import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        const raiz = 'https://luizcorcini.000webhostapp.com/ReacNative_Project/Aula08_InstaUSC/';
        this.state = {
            posts: [
                {
                    id: '1',
                    nom_autor: 'Francisco Mendes',
                    img_autor: raiz + 'perfilAluno2.png',
                    loc_pub: 'Lago azul - Curitiba-PR',
                },
                {
                    id: '2',
                    nom_autor: 'Bruna Dantas',
                    img_autor: raiz + 'perfilAluna1.png',
                    loc_pub: 'Imagens de Portugal - Angra do Heroísmo',
                },
                {
                    id: '3',
                    nom_autor: 'Alberto Ramos',
                    img_autor: raiz + 'perfilAluno1.png',
                    loc_pub: 'Imagens de Portugal - Porto',
                },

                {
                    id: '4',
                    nom_autor: 'Carol Farina ',
                    img_autor: raiz + 'perfilAluna2.png',
                    loc_pub: 'Imagens de Portugal -Fátima',
                },

            ]
        };
        this.mostra_Dados = this.mostra_Dados.bind(this)
    }
    mostra_Dados({ item: postagem }) {
        return (
            <View style={estilos.area_feed}>
                <View style={estilos.area_post_header}>
                    <View style={estilos.area_post_header_esquerda}>
                        <View style={estilos.img_autor}>
                            <Image
                                source={{ uri: postagem.img_autor }}
                                style={estilos.img_autor} />
                        </View>
                        <View style={estilos.info}>
                            <Text style={estilos.nom_autor}>{postagem.nom_autor}</Text>
                            <Text style={estilos.loc_pub}>{postagem.loc_pub}</Text>
                        </View>
                    </View>
                    <View style={estilos.area_post_header_direita}>
                        <View style={estilos.icone}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../img/options@3x.png')}
                                    style={{ width: 10, height: 20 }}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={estilos.area_post_img}>
                    <Text>imag publicação</Text>
                </View>
                <View style={estilos.area_post_botoes}>
                    <Text>botões publicação</Text>
                </View>
                <View style={estilos.area_post_likes}>
                    <Text>likes publicação</Text>
                </View>
                <View style={estilos.area_post_footer}>
                    <Text>Rodapé publicação</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.posts}
                renderItem={this.mostra_Dados} />
        );
    }
}
/*
const estilos = StyleSheet.create({
    area_feed: {
      
    },
    area_post_header: {
        backgroundColor: 'yellow'
    },
    area_post_img: {
        backgroundColor: 'red'
    },
    area_post_botoes: {
        backgroundColor: 'green'
    },
    area_post_likes: {
        backgroundColor: 'blue',
    },
    area_post_footer: {
        backgroundColor: 'grey'
    },
   

});
export default Feed;/// para tesra o desafio 5 use "/*" aqui...


const estilos = StyleSheet.create({
    area_feed: {
        backgroundColor: 'yellow'
    },
    area_post_header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 5
    },
    area_post_header_esquerda: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        padding: 10
    },
    area_post_img: {
        backgroundColor: 'red'
    },
    area_post_botoes: {
        backgroundColor: 'green'
    },
    area_post_likes: {
        backgroundColor: 'blue',
    },
    area_post_footer: {
        backgroundColor: 'grey'
    },
    img_autor: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nom_autor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666'
    },
});
export default Feed;

///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 06. 
//A View de cada postagen..
//primeiro passo - indentificar a imagem da postagem
// segundo -alterando o método mostar_Dados
// terceiro - definindo o estilo de imagem do post

import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        const raiz = 'https://luizcorcini.000webhostapp.com/ReacNative_Project/Aula08_InstaUSC/';
        this.state = {
            posts: [
                {
                    id: '1',
                    nom_autor: 'Francisco Mendes',
                    img_autor: raiz + 'perfilAluno2.png',
                    loc_pub: 'Imagens de Portugal - Porto',
                    img_pub: raiz + 'porto_02.jpg'
                },
                {
                    id: '2',
                    nom_autor: 'Bruna Dantas',
                    img_autor: raiz + 'perfilAluna1.png',
                    loc_pub: 'Imagens de Portugal - Angra do Heroísmo',
                    img_pub: raiz + 'angra_do_heroismo_01.jpg'
                },
                {
                    id: '3',
                    nom_autor: 'Alberto Ramos',
                    img_autor: raiz + 'perfilAluno1.png',
                    loc_pub: 'Imagens de Portugal - Lisboa',
                    img_pub: raiz + 'lisboa_02.jpg'
                },

                {
                    id: '4',
                    nom_autor: 'Carol Farina ',
                    img_autor: raiz + 'perfilAluna2.png',
                    loc_pub: 'Imagens de Portugal -Fátima',
                    img_pub: raiz + 'fatima_02.jpg'
                },

            ]
        };
        this.mostra_Dados = this.mostra_Dados.bind(this)
    }
    mostra_Dados({ item: postagem }) {
        return (
            <View style={estilos.area_feed}>
                <View style={estilos.area_post_header}>
                    <View style={estilos.area_post_header_esquerda}>
                        <View style={estilos.img_autor}>
                            <Image
                                source={{ uri: postagem.img_autor }}
                                style={estilos.img_autor} />
                        </View>
                        <View style={estilos.info}>
                            <Text style={estilos.nom_autor}>{postagem.nom_autor}</Text>
                            <Text style={estilos.loc_pub}>{postagem.loc_pub}</Text>
                        </View>
                    </View>
                    <View style={estilos.area_post_header_direita}>
                        <View style={estilos.icone}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../img/options@3x.png')}
                                    style={{ width: 10, height: 20 }}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={estilos.area_post_img}>
                    <Image
                        source={{ uri: postagem.img_pub }}
                        style={estilos.img_pub} />
                </View>
                <View style={estilos.area_post_botoes}>
                    <Text>botões publicação</Text>
                </View>
                <View style={estilos.area_post_likes}>
                    <Text>likes publicação</Text>
                </View>
                <View style={estilos.area_post_footer}>
                    <Text>Rodapé publicação</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.posts}
                renderItem={this.mostra_Dados} />
        );
    }
}

const estilos = StyleSheet.create({
    area_feed: {
        backgroundColor: 'yellow'
    },
    area_post_header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 5
    },
    area_post_header_esquerda: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        padding: 10
    },
    area_post_img: {
        backgroundColor: 'red'
    },
    area_post_botoes: {
        backgroundColor: 'green'
    },
    area_post_likes: {
        backgroundColor: 'blue',
    },
    area_post_footer: {
        backgroundColor: 'grey'
    },
    img_autor: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nom_autor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    loc_pub:{
        fontSize:14,
        color: '#666'
    },
    img_pub:{
        resizeMode:'cover',
        height:400
    }
});
export default Feed;

///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 07. 
//Os botões de ação do post..
//primeiro passo - planejando a disposição dos botões
// segundo -implementando o código
// terceiro -implementa o estilo dos botões

import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        const raiz = 'https://luizcorcini.000webhostapp.com/ReacNative_Project/Aula08_InstaUSC/';
        this.state = {
            posts: [
                {
                    id: '1',
                    nom_autor: 'Francisco Mendes',
                    img_autor: raiz + 'perfilAluno2.png',
                    loc_pub: 'Imagens de Portugal - Porto',
                    img_pub: raiz + 'porto_02.jpg'
                },
                {
                    id: '2',
                    nom_autor: 'Bruna Dantas',
                    img_autor: raiz + 'perfilAluna1.png',
                    loc_pub: 'Imagens de Portugal - Angra do Heroísmo',
                    img_pub: raiz + 'angra_do_heroismo_01.jpg'
                },
                {
                    id: '3',
                    nom_autor: 'Alberto Ramos',
                    img_autor: raiz + 'perfilAluno1.png',
                    loc_pub: 'Imagens de Portugal - Lisboa',
                    img_pub: raiz + 'lisboa_02.jpg'
                },

                {
                    id: '4',
                    nom_autor: 'Carol Farina ',
                    img_autor: raiz + 'perfilAluna2.png',
                    loc_pub: 'Imagens de Portugal -Fátima',
                    img_pub: raiz + 'fatima_02.jpg'
                },

            ]
        };
        this.mostra_Dados = this.mostra_Dados.bind(this)
    }
    mostra_Dados({ item: postagem }) {
        return (
            <View style={estilos.area_feed}>
                <View style={estilos.area_post_header}>
                    <View style={estilos.area_post_header_esquerda}>
                        <View style={estilos.img_autor}>
                            <Image
                                source={{ uri: postagem.img_autor }}
                                style={estilos.img_autor} />
                        </View>
                        <View style={estilos.info}>
                            <Text style={estilos.nom_autor}>{postagem.nom_autor}</Text>
                            <Text style={estilos.loc_pub}>{postagem.loc_pub}</Text>
                        </View>
                    </View>
                    <View style={estilos.area_post_header_direita}>
                        <View style={estilos.icone}>
                            <TouchableOpacity style={estilos.botoes}>
                                <Image style={estilos.icones_post_botoes}
                                    source={require('../../img/options@3x.png')}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={estilos.area_post_img}>
                    <Image
                        source={{ uri: postagem.img_pub }}
                        style={estilos.img_pub} />
                </View>
                <View style={estilos.area_post_botoes}>
                    <View style={estilos.area_post_botoes_esquerda}>
                        <TouchableOpacity style={estilos.botoes}>
                            <Image style={estilos.icones_post_botoes}
                                source={require('../../img/like@3x.png')}
                                resizeMode='contain' />
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.botoes}>
                            <Image style={estilos.icones_post_botoes}
                                source={require('../../img/comment@3x.png')}
                                resizeMode='contain' />
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.botoes}>
                            <Image style={estilos.icones_post_botoes}
                                source={require('../../img/send@3x.png')}
                                resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    <View style={estilos.area_post_botoes_direita}>
                        <TouchableOpacity style={estilos.botoes}>
                            <Image style={estilos.icones_post_botoes}
                                source={require('../../img/save@3x.png')}
                                resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={estilos.area_post_likes}>
                    <Text>likes publicação</Text>
                </View>
                <View style={estilos.area_post_footer}>
                    <Text>Rodapé publicação</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.posts}
                renderItem={this.mostra_Dados} />
        );
    }
}

const estilos = StyleSheet.create({
    area_feed: {

    },
    area_post_header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 5
    },
    area_post_header_esquerda: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        paddingLeft: 10
    },
    area_post_img: {

    },
    area_post_botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    area_post_botoes_esquerda: {
        flexDirection: 'row'
    },
    area_post_likes: {
        backgroundColor: 'blue',
    },
    area_post_footer: {
        backgroundColor: 'grey'
    },
    img_autor: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nom_autor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    loc_pub: {
        fontSize: 14,
        color: '#666'
    },
    img_pub: {
        resizeMode: 'cover',
        height: 400
    },
    icones_post_botoes: {
        width: 30,
        height: 30
    },
    botoes: {
        paddingHorizontal:10
    }
});
export default Feed;

*///---------------------------------------------------------------------------
// AULA08..InstaUSC....Desafio 08. 
//Trabalhando na área de contagem de likes..
//primeiro passo - indentificando os componentes da área
// segundo -implementando a base de feed
// terceiro -implementando a área (area_likes) e as props de style
//quarto  - ajustes finais

import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        const raiz = 'https://luizcorcini.000webhostapp.com/ReacNative_Project/Aula08_InstaUSC/';
        this.state = {
            posts: [
                {
                    id: '1',
                    nom_autor: 'Francisco Mendes ',
                    img_autor: raiz + 'perfilAluno2.png',
                    loc_pub: 'Imagens de Portugal - Porto',
                    img_pub: raiz + 'porto_02.jpg',
                    lik_pub: '10',
                    des_pub: 'Cidade dos vinhedos e dos vinhos',
                    com_pub: '1',
                    dat_pub: '17 de fevereiro de 2021'
                },
                {
                    id: '2',
                    nom_autor: 'Bruna Dantas ',
                    img_autor: raiz + 'perfilAluna1.png',
                    loc_pub: 'Imagens de Portugal - Angra do Heroísmo',
                    img_pub: raiz + 'angra_do_heroismo_01.jpg',
                    lik_pub: '3',
                    des_pub: 'Visitando um paraiso',
                    com_pub: '3',
                    dat_pub: '27 de abril de 2021'
                },
                {
                    id: '3',
                    nom_autor: 'Alberto Ramos ',
                    img_autor: raiz + 'perfilAluno1.png',
                    loc_pub: 'Imagens de Portugal - Lisboa',
                    img_pub: raiz + 'lisboa_02.jpg',
                    lik_pub: '10',
                    des_pub: 'primeira cidade do mundo conectada',
                    com_pub: '0',
                    dat_pub: '29 de julho de 2021'
                },

                {
                    id: '4',
                    nom_autor: 'Carol Farina ',
                    img_autor: raiz + 'perfilAluna2.png',
                    loc_pub: 'Imagens de Portugal -Fátima',
                    img_pub: raiz + 'fatima_02.jpg',
                    lik_pub: '10',
                    des_pub: 'Visitando um paraiso',
                    com_pub: '1',
                    dat_pub: '31 de dezembro de 2021'
                },

            ]
        };
        this.mostra_Dados = this.mostra_Dados.bind(this)
        this.mostra_Likes = this.mostra_Likes.bind(this)
        this.mostra_Comments = this.mostra_Comments.bind(this)
    };
    mostra_Comments(comentarios) {
        if (comentarios == 1) {
            return (
                <Text style={estilos.comments}>Ver o comentário.</Text>
            );
        }
        else if (comentarios > 1) {
            return (
                <Text style={estilos.comments}>Ver todos os {comentarios} comentário.</Text>
            );
        }
    }
    mostra_Likes(gostei) {
        if (gostei == 1) {
            return (
                <Text style={estilos.curtidas}>{gostei}cur curtida</Text>
            )
        }
        else if (gostei > 1) {
            return (
                <Text style={estilos.curtidas}>{gostei} curtidas</Text>
            );
        }
    };

    mostra_Dados({ item: postagem }) {
        return (
            <View style={estilos.area_feed}>
                <View style={estilos.area_post_header}>
                    <View style={estilos.area_post_header_esquerda}>
                        <View style={estilos.img_autor}>
                            <Image
                                source={{ uri: postagem.img_autor }}
                                style={estilos.img_autor} />
                        </View>
                        <View style={estilos.info}>
                            <Text style={estilos.nom_autor}>{postagem.nom_autor}</Text>
                            <Text style={estilos.loc_pub}>{postagem.loc_pub}</Text>
                        </View>
                    </View>
                    <View style={estilos.area_post_header_direita}>
                        <View style={estilos.icone}>
                            <TouchableOpacity style={estilos.botoes}>
                                <Image style={estilos.icones_post_botoes}
                                    source={require('../../img/options@3x.png')}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={estilos.area_post_img}>
                    <Image
                        source={{ uri: postagem.img_pub }}
                        style={estilos.img_pub} />
                </View>
                <View style={estilos.area_post_botoes}>
                    <View style={estilos.area_post_botoes_esquerda}>
                        <TouchableOpacity style={estilos.botoes}>
                            <Image style={estilos.icones_post_botoes}
                                source={require('../../img/like@3x.png')}
                                resizeMode='contain' />
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.botoes}>
                            <Image style={estilos.icones_post_botoes}
                                source={require('../../img/comment@3x.png')}
                                resizeMode='contain' />
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.botoes}>
                            <Image style={estilos.icones_post_botoes}
                                source={require('../../img/send@3x.png')}
                                resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    <View style={estilos.area_post_botoes_direita}>
                        <TouchableOpacity style={estilos.botoes}>
                            <Image style={estilos.icones_post_botoes}
                                source={require('../../img/save@3x.png')}
                                resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={estilos.area_post_likes}>
                    {this.mostra_Likes(postagem.lik_pub)}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold' }}>{postagem.nom_autor}</Text>
                        <Text>{postagem.des_pub}</Text>
                    </View>
                    {this.mostra_Comments(postagem.com_pub)}
                    <View style={estilos.area_dat_pub}>
                        <Text style={estilos.dat_pub}>{postagem.dat_pub}</Text>
                        <Text style={estilos.dat_pub2}>- ver Tradução</Text>
                    </View>
                </View>
                <View style={estilos.area_post_footer}>
                    <Text>Rodapé publicação</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.posts}
                renderItem={this.mostra_Dados} />
        );
    }
}

const estilos = StyleSheet.create({
    area_feed: {

    },
    area_post_header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 5
    },
    area_post_header_esquerda: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        paddingLeft: 10
    },
    area_post_img: {

    },
    area_post_botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    area_post_botoes_esquerda: {
        flexDirection: 'row'
    },
    area_post_likes: {
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    curtidas: {
        fontWeight: 'bold',
        fontSize: 15
    },
    comments: {
        color: '#666',
        fontSize: 13
    },
    area_dat_pub: {
        flexDirection: 'row'
    },
    dat_pub: {
        fontSize: 10,
        color: '#666'
    },
    dat_pub2: {
        fontSize: 10,
        color: '#666',
        fontWeight: 'bold'
    },
    area_post_footer: {
        backgroundColor: 'grey'
    },
    img_autor: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nom_autor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    loc_pub: {
        fontSize: 14,
        color: '#666'
    },
    img_pub: {
        resizeMode: 'cover',
        height: 400
    },
    icones_post_botoes: {
        width: 30,
        height: 30
    },
    botoes: {
        paddingHorizontal: 10
    }
});
export default Feed;