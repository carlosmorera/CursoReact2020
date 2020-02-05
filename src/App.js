import React, {Component} from "react";
import './global.css'


class Hijo extends Component {
    manejadorClick = () => {
        this.props.onSaluda("123")
    }

    render() {
        return (
            <div className='box blue'>
                <h2>Hijo</h2>
                <button
                    onClick={this.manejadorClick}>
                    Saludar!
                </button>

            </div>
        );
    }
}


class App extends Component {

    state = {
        name: ''
    }
    manejador = (name) => {
     this.setState({
         name
     })
    }

    render() {
        return (
            <div className='box red'>
                <Hijo
                    onSaluda={this.manejador}
                />
                <h1>
                    Nombre: {this.state.name}
                </h1>
            </div>
        );
    }
}

export default App
