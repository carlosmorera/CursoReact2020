import React, {Component, Fragment} from "react";

const Computacion = () => (
    <Fragment>
        <li>Pantalla</li>
        <li>Teclado</li>
        <li>Mouse</li>
    </Fragment>
)


const Ropa = () => (
    <Fragment>
        <li>Playeras</li>
        <li>Jenas</li>
        <li>Short</li>
    </Fragment>
)
//En este caso no se usa la etiqueta Fragment pero es lo mismo, lo unico es que no se pueden enviar parametros
const Auto = () => (
    <>
        <li> parte 1</li>
        <li> parte 2</li>
    </>
)


class App extends Component {


    render() {
        return (
            <div>
                <Computacion/>
                <Ropa/>
                <Auto/>
            </div>
        )
    }
}


export default App
