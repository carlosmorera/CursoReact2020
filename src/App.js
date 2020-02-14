import React, {Component} from "react";

class Botton extends Component {
    state = {
        dispatchError: false
    }
    dispatchError = () => {
        this.setState({
            dispatchError: true
        })
    }

    render() {
        if (this.state.dispatchError) {
            throw new Error('Esto es un mensaje de fallo')
        }
        return (
            <button
                onClick={this.dispatchError}
            >
                Boton con Bug
            </button>
        );
    }
}

class LimiteErrores extends Component {

    state = {
        tieneError: false
    }

    componentDidCatch(error,errorInfo) {
        this.setState({
            tieneError: true,
            error
        })
    }

    render() {
        if (this.state.tieneError) {
            return (
                <div>
                    Wops! Algo salio mal!
                    <div
                        style={{
                            color: 'orangered'
                        }}
                    >
                        {this.state.error && this.state.error.toString()}

                    </div>
                </div>)
        }
        return this.props.children
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <LimiteErrores>
                    <Botton/>
                </LimiteErrores>
                <LimiteErrores>
                    <Botton/>
                </LimiteErrores>
                <LimiteErrores>
                    <Botton/>
                </LimiteErrores>
            </div>
        )
    }
}

export default App
