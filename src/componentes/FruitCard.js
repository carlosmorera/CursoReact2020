import React from "react";
import styles from './FruitCard.module.css'

class FruitCard extends React.Component {

    state = {
        cantidad: 0
    }

    agregar = () => this.setState({
        cantidad: this.state.cantidad + 1
    })


    quitar = () => this.setState({
        cantidad: this.state.cantidad - 1
    })


    limpiar = () => this.setState({
        cantidad: 0
    })


    render() {
        const hasItems = this.state.cantidad > 0
        const acyiveClass = hasItems ? styles['card-active'] :''
        const clases = styles.card + ' ' + acyiveClass
        return (
            <div className={clases}>
                <h3>{this.props.name}</h3>
                <div>cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}> +</button>
                <button onClick={this.quitar}> -</button>
                <button onClick={this.limpiar}> Limpiar</button>
                <hr/>
                <p>$ {this.props.price}</p>
                <p>
                    Total: $ {this.props.price * this.state.cantidad}
                </p>
            </div>
        );
    }
}

const App = () => (
    <div>
        <FruitCard name={'Apple'} price={2.00}/>
        <FruitCard name='Orange' price={3.00}/>
        <FruitCard name='Kiwi'/>
    </div>
)

export default App
