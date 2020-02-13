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

                <p>
                    <label htmlFor='name'>Nombre: </label>
                    <input
                        type="text"
                        placeholder='Nombre'
                        id='name'
                    />
                </p>
                <p>
                    <label htmlFor='email'>Email: </label>
                    <input
                        type="text"
                        placeholder='Email'
                        id='email'
                    />
                </p>

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
                    onSend={this.send}
                />
            </div>
        )
    }
}

export default App
