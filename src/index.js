import React from "react";
import ReactDom from 'react-dom'

class FruitTarjet extends React.Component {
    constructor() {
        super();
        this.state = {
            cantidad: 0
        }
    }


    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr/>
                <div>cantidad: {this.state.cantidad}</div>
                <button onClick={() => {
                this.setState({cantidad: this.state.cantidad + 1})
                }}
                >
                    Agregar
                </button>
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

ReactDom.render(<App/>, document.getElementById('root'))
