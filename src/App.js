import React, {Component} from "react";

class Timer extends Component {

    state = {
        time: 0,
        isPlaying: true
    }

    tick = null

    componentDidMount() {
        this.play()
    }

    componentWillUnmount() {
        /*
        * Limpiar Intervals
        * Limpiar Event Listeners
        * Ejecutar algun metodo para que limpie algo del padre
        */
        this.props.onDestroy()
        clearInterval(this.tick)
    }

    play = () => {
        this.setState({isPlaying: true})
        this.tick = setInterval(() => {
            this.setState(state => ({
                time: state.time + 1
            }))
        }, 1000)
    }

    pause = () => {
        this.setState({isPlaying: false})
        clearInterval(this.tick)
    }

    toggle = () => {
        this.state.isPlaying
            ? this.pause()
            : this.play()
    }

    render() {
        const {time, isPlaying} = this.state

        return (
            <div>
                <h1>{time}</h1>
                <button onClick={this.toggle}>
                    {
                        isPlaying
                            ? 'Pause'
                            : 'Play'
                    }
                </button>
            </div>
        )
    }
}

class App extends Component {
    state = {
        show: true,
        message: ' '
    }

    desmontar = () => {
        this.setState({
            show: false
        })
    }
    handleDestroy = () => {
        this.setState({
            message: 'EL componente Contador fue destruido.'
        })
    }

    render() {
        const {message} = this.state
        return (
            <div>
                <h3>{message}</h3>
                <button onClick={this.desmontar}>
                    Desmontar
                </button>
                {this.state.show &&
                <Timer
                    onDestroy={this.handleDestroy}
                />
                }
            </div>
        )
    }
}

export default App
