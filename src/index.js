import React from "react";
import ReactDOM from 'react-dom'

class FruitTarjet extends React.Component {
    constructor() {
        super();

        const METHODS = [
            'agregar',
            'quitar',
            'limpiar'
        ];

        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })

        this.state = {
            cantidad: 0
        }
    }

    agregar() {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }

    quitar() {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }

    limpiar() {
        this.setState({
            cantidad: 0
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr/>
                <div>cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}> +</button>
                <button onClick={this.quitar}> -</button>
                <button onClick={this.limpiar}> Limpiar</button>
                <p>$ {this.props.price}</p>
            </div>
        );
    }
}

const App = () => (
    <div>
        <FruitTarjet name={'Apple'} price={2.00}/>
        <FruitTarjet name='Orange' price={3.00}/>
        <FruitTarjet name='Kiwi'/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))
