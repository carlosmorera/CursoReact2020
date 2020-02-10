import React, {Component} from "react";
import {renderIntoDocument} from "react-dom/test-utils";

class App extends Component {

    state = {
        fruits: [
            {name: 'Pera', price: 10},
            {name: 'Manzana', price: 15},
            {name: 'Lulo', price: 30}
        ],
        frutaSeleccionada: {}
    }
    select = (frutaSeleccionada, event) => {
        this.setState({
            frutaSeleccionada
        })
    }

    render() {
        return (
            <ul>
                {this.state.fruits.map((fruit) => (
                    <li
                        key={fruit.name}
                        onClick={this.select.bind(this, fruit)}
                        style={{
                            color: this.state.frutaSeleccionada.name === fruit.name
                                ? 'red'
                                : '#000'
                        }}
                    >
                        {fruit.name} - {fruit.price}
                    </li>
                ))}
            </ul>
        )
    }
}

export default App
