
/* 
USE AS LINHAS ///-------------------PARA TESTAR OS CODIGOS, MUDANDO APENAS " * "
    * / //------------------
     / * //-------------------
*/
///---------------------------------------------------------------------------------------
// Desafio 01.

import React, {Component} from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 0, flexDirection: "column" }}>
                <View style={{ flex: 1, backgroundColor: "red" }} />
                <View style={{ flex: 2, backgroundColor: "darkorange" }} />
                <View style={{ flex: 3, backgroundColor: "green" }} />
            </View>
        )
    }
}
export default App;


/*//----------------------------------------------------------------------------------------
//Desafio 02.

import React, {Component} from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 0, flexDirection: "row" }}>
                <View style={{ flex: 1, backgroundColor: "red" }} />
                <View style={{ flex: 2, backgroundColor: "darkorange" }} />
                <View style={{ flex: 3, backgroundColor: "green" }} />
            </View>
        )
    }
}
export default App;  



///-------------------------------------------------------------------------------------------
//Desafio 03.

import React, {Component} from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 0, flexDirection: "row" }}>
                <View style={{ flex: 2, backgroundColor: "red" }} />
                <View style={{ flex: 4, backgroundColor: "darkorange" }} />
                <View style={{ flex: 1, backgroundColor: "green" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 04.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "row" }}>
                <View style={{ width: 70, height: 70, backgroundColor: "powderblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "skyblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "steelblue" }} />
            </View>
        )
    }
}
export default App;

///-------------------------------------------------------------------------------------------
//Desafio 05.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "row" }}>
                <View style={{ width: 70, height: 70, backgroundColor: "powderblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "skyblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "steelblue" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 05.1.  Alterando o parâmentro flexDirection  de "row" para "column".

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "column" }}>
                <View style={{ width: 70, height: 70, backgroundColor: "powderblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "skyblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "steelblue" }} />
            </View>
        )
    }
}
export default App;

///-------------------------------------------------------------------------------------------
//Desafio 05.2. Alterando o parâmentro flexDirection de  "column" para "column-reverse".

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "column-reverse" }}>
                <View style={{ width: 70, height: 70, backgroundColor: "powderblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "skyblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "steelblue" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 05.3.  Alterando o parâmentro flexDirection de "column-reverse" para "row-reverse".

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "row-reverse" }}>
                <View style={{ width: 70, height: 70, backgroundColor: "powderblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "skyblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "steelblue" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 05.4.  Alterando o parâmentro flexDirection de "row-reverse" para "row".

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "row" }}>
                <View style={{ width: 70, height: 70, backgroundColor: "powderblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "skyblue" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "steelblue" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 06.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "white",
                  justifyContent:"center", flexDirection:"column" }}>
                <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "black" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 07. Alterando o parâmentro flexDirection de  "row" para "column".


import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "white",
                  justifyContent:"center", flexDirection:"row" }}>
                <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "black" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 07.1. Alterando o parâmentro flexDirection de "row" para "column".
//Alterando o parâmentro justifyContent: de "center" para "flex-start".


import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "white",
                  justifyContent:"flex-start", flexDirection:"column" }}> 
                <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "black" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 07.2. Alterando o parâmentro flexDirection de "row" para "column".
//Alterando o parâmentro justifyContent: de "flex-start" para "flex-end".

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "white",
                  justifyContent:"flex-end", flexDirection:"column" }}>   
                <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "black" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 07.3. Alterando o parâmentro flexDirection de "row" para "column".
//Alterando o parâmentro justifyContent: de "flex-end" para "space-between".


import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "white",
                  justifyContent:"space-between", flexDirection:"column" }}>   
                <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "black" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 07.4. Alterando o parâmentro flexDirection de "row" para "column".
//Alterando o parâmentro justifyContent: de "space-between" para "space-around".


import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "white",
                  justifyContent:"space-around", flexDirection:"column" }}>  
                <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "black" }} />
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 07.5.  Alterando o parâmentro flexDirection de "row" para "column".
//Alterando o parâmentro justifyContent: de "space-around" para "space-evenly".


import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "white",
                  justifyContent:"space-evenly", flexDirection:"column" }}>  
                <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "black" }} />
                
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 07.6.  Alterando o parâmentro flexDirection de "row" para "column".
//Alterando o parâmentro justifyContent: voltando para "center"

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 50, flexDirection: "white",
                  justifyContent:"center", flexDirection:"column" }}>  
                <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
                <View style={{ width: 70, height: 70, backgroundColor: "black" }} />
                
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 08.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1, padding: 0, flexDirection: "white",
                alingIntens: "stretch",
                justifyContent: "center",
                flexDirection: "row"
            }}>
                <View style={{ width: 100, backgroundColor: "green" }} />
                <View style={{ width: 50, backgroundColor: "red" }} />
                <View style={{ width: 30, backgroundColor: "black" }} />

            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 09. Alterando o parâmentro flexDirection de "row "para "column". 
//OBS:tem que trocar de "width" para "height".

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1, padding: 0, flexDirection: "white",
                alingIntens: "stretch",
                justifyContent: "center",
                flexDirection: "column" }}>  
                <View style={{ height:100, backgroundColor: "green" }} />
                <View style={{ height:50, backgroundColor: "red" }} />
                <View style={{  height:30, backgroundColor: "black" }} />
        
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 09.1.  Alterando o parâmentro da justifyContent, pois não é necessário mudar o parâmetro alignItens. 
//justifyContent:  flex-start.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1, padding: 0, flexDirection: "white",
                alingIntens: "stretch",
                justifyContent: "flex-start",
                flexDirection: "row"
            }}>
                <View style={{ width: 100, backgroundColor: "green" }} />
                <View style={{ width: 50, backgroundColor: "red" }} />
                <View style={{ width: 30, backgroundColor: "black" }} />

            </View>
        )
    }
} 
export default App;


///--------------------------------------------------------------------------------------------
//Desafio 09.2.  Alterando o parâmentro da justifyContent, pois não é necessário mudar o parâmetro alignItens. 
//justifyContent:  flex-end.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1, padding: 0, flexDirection: "white",
                alingIntens: "stretch",
                justifyContent: "flex-end",
                flexDirection: "row" }}>  
                <View style={{ width: 100, backgroundColor: "green" }} />
                <View style={{ width: 50, backgroundColor: "red" }} />
                <View style={{ width: 30, backgroundColor: "black" }} />
        
            </View>
        )
    }
}
export default App;

///--------------------------------------------------------------------------------------------
//Desafio 09.3. Alterando o parâmentro da justifyContent, pois não é necessário mudar o parâmetro alignItens. 
//justifyContent:  space-between.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1, padding: 0, flexDirection: "white",
                alingIntens: "stretch",
                justifyContent: "space-between",
                flexDirection: "row" }}>  
                <View style={{ width: 100, backgroundColor: "green" }} />
                <View style={{ width: 50, backgroundColor: "red" }} />
                <View style={{ width: 30, backgroundColor: "black" }} />
        
            </View>
        )
    }
}
export default App;


///--------------------------------------------------------------------------------------------
//Desafio 09.4. Alterando o parâmentro da justifyContent, pois não é necessário mudar o parâmetro alignItens. 
//justifyContent:  flex-around.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1, padding: 0, flexDirection: "white",
                alingIntens: "stretch",
                justifyContent: "space-around",
                flexDirection: "row" }}>  
                <View style={{ width: 100, backgroundColor: "green" }} />
                <View style={{ width: 50, backgroundColor: "red" }} />
                <View style={{ width: 30, backgroundColor: "black" }} />
        
            </View>
        )
    }
}
export default App;

///------------------------------------------------------------------------------------------------
//Desafio 09.5. Alterando o parâmentro da justifyContent, pois não é necessário mudar o parâmetro alignItens. 
//justifyContent:  space-evenly.

import React, { Component } from "react";
import { View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1, padding: 0, flexDirection: "white",
                alingIntens: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row" }}>  
                <View style={{ width: 100, backgroundColor: "green" }} />
                <View style={{ width: 50, backgroundColor: "red" }} />
                <View style={{ width: 30, backgroundColor: "black" }} />
        
            </View>
        )
    }
}
export default App;*///