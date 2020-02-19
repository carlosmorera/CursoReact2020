import React, {Component} from "react";

class Contador extends Component {
    // Esta es la forma adecauada de usar el constructor del componente
    /*    constructor(props) {
        super(props);
        this.agregar = this.agregar.bind(this)
        this.
        }
    }*/
    state = {
        num: this.props.num
    }
    agregar = () => {
        this.setState(state => ({
            num: state.num + 1
        }))
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.agregar}
                >
                    click({this.state.num})
                </button>
            </div>
        )
    }
}

class App extends Component {

    render() {
        return (
            <div>
                <h1>Metodo constructor</h1>
                <Contador
                    num={100}
                /> <Contador
                num={10}
            />
            </div>
        )
    }
}

export default App
