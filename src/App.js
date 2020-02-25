import React, {Component} from "react";
import PubSub from 'pubsub-js'

const boxStyle = {
    padding: '0.5em',
    margin: '0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
}
const blueStyle = {
    ...boxStyle,
    border: '1px solid blue'
}
const redStyle = {
    ...boxStyle,
    border: '1px solid red'
}
const greenStyle = {
    ...boxStyle,
    border: '1px solid green'
}

class Son extends Component {
    render() {
        return (
            <div
                style={blueStyle}>
                <Grandson/>
            </div>
        )
    }
}

class Grandson extends Component {
    render() {
        return (
            <div
                style={redStyle}>
                <GreatGrandSon/>
            </div>
        )
    }
}

class GreatGrandSon extends Component {

    state = {
        message: '*****'
    }

    componentDidMount() {
        PubSub.subscribe('eventPadre', (e, data) => {
            this.setState({
                message: data.title
            })
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe('eventPadre')
    }


    handleCLick = () => {
        PubSub.publish('eventGreatGrandSon', 'Hola soy el vento del Bis Nieto')
    }

    render() {
        return (
            <div
                style={greenStyle}>
                <p>{this.state.message}</p>
                <button
                    onClick={this.handleCLick}>
                    Bis Nieto
                </button>
            </div>
        )
    }
}

class App extends Component {

    componentDidMount() {
        PubSub.subscribe('eventGreatGrandSon', (e, data) => {
            alert(data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe('eventGreatGrandSon')
    }


    handleClick = () => {
        PubSub.publish('eventPadre',{
            title:'Hola vengo desde el componete Principal'
        })
    }

    render() {
        return (
            <div
                style={boxStyle}>
                <button
                onClick={this.handleClick}>
                    Padre
                </button>
                <Son/>
            </div>
        )
    }
}

export default App
