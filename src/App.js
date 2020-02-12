import React, {Component} from "react";

//Con los input no controlados no podermos controlar los cambios de la informacion

class InputNoControlado extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        const nombre = event.target[0].value
        const email = event.target[1].value
        this.props.onSend({nombre, email})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder='Nombre'
                />
                <input
                    type="text"
                    placeholder='Email'
                />
                <button>
                    Enviar
                </button>
            </form>
        )
    }

}

class App extends Component {
    send = (data) => {
        console.log(data)
    }

    render() {
        return (
            <div>
                <h1>Inputs no controlados Formularios</h1>
                <InputNoControlado
                onSend ={this.send}
                />
            </div>
        )
    }
}

export default App
