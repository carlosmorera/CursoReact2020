import React, {Component} from "react";

class Hijo extends Component {

    state = {
        message: 'Vacio'
    }
    dispatchAlert = (e, message = 'Alerta  desde el hjo') => {
        alert(message)
        this.setState({message})
    }

    render() {
        const {message} = this.state
        return (
            <div>
                <h2>{message}</h2>

                <button
                    onClick={this.dispatchAlert}
                >
                    Hijo
                </button>
            </div>
        )
    }
}

class App extends Component {

    hijo = React.createRef()


    handleClick = () => {
        this.hijo.current.dispatchAlert(null, 'mensaje desde el componente padre')
    }

    render() {
        return (
            <div>
                <Hijo
                    ref={this.hijo}
                />
                <button
                    onClick={this.handleClick}
                >
                    Padre
                </button>
            </div>
        )
    }
}

export default App
