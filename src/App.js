import React, {Component} from "react";

//Con los input  controlados  podermos controlar los cambios de la informacion en tiempo real

class InputControlado extends Component {
    state = {
        text: '',
        color: '#E8E8E8'
    }
    actualizar = (event) => {

        const text = event.target.value
        let color = 'green'

        if(text.trim() === ''){
            color= '#E8E8E8'
        }
        if(text.trim() !== '' && text.length < 5){
            color= 'red'
        }
        this.setState({text, color})
    }

    render() {
        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline
    :
        'none'
    }

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.actualizar}
                    style={styles}
                />
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
                <h1>Inputs controlados</h1>
                <InputControlado
                />
            </div>
        )
    }
}

export default App
