import React, {Component} from "react";

class App extends Component {

    state = {
        text: '',
        evento: ''
    }

    manejador = (event) => {
        this.setState({
            text: event.target.value,
            evento: event.type
        })
    }

    manejadorSegundario = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.manejador}
                    onCopy={this.manejador}
                    onPaste={this.manejador}
                />
                <h1>
                    Estado del texto: {this.state.text}
                </h1>
                <h2>
                    Tipo de evento: {this.state.evento}
                </h2>

                <a
                    href="https://www.google.com/"
                    onClick={this.manejadorSegundario}
                    // onclick="return false"
                >
                    Google
                    </a>
            </div>

    )
    }
    }

    export default App
