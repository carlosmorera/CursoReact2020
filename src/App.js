import React, {Component} from "react";

const boxStyle = {
    padding: '0.5em',
    margin: '0.5em',
    border: '1pz solid gray',
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


class ComponetA extends Component {

    render() {
        const {num} = this.props
        return (
            <div
                style={blueStyle}>
                <button
                    onClick={this.props.onAdd}>
                    Componete A ({num})
                </button>
            </div>
        )
    }
}

class ComponentB extends Component {

    render() {
        const {num} = this.props

        return (
            <div
                style={redStyle}>
                <button
                    onClick={this.props.onAdd}>
                    Componete B ({num})
                </button>
            </div>
        )
    }
}

class App extends Component {

    state = {
        countA: 0,
        countB: 0
    }

    handleAddA = () => {
        this.setState({
            countA: this.state.countA + 1
        })
    }
    handleAddB = () => {
        this.setState({
            countB: this.state.countB + 2
        })
    }

    render() {
        const {countA, countB} = this.state
        return (
            <div>
                <ComponetA
                    num={countA}
                    onAdd={this.handleAddB}
                />
                <ComponentB
                    num={countB}
                    onAdd={this.handleAddA}
                />

            </div>
        )
    }
}

export default App
