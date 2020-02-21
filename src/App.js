import React, {Component} from "react";

class Contador extends Component {
    state = {
        num: this.props.num
    }

    //componentWillReceiveProps(
    static getDerivedStateFromProps(nextProps, prevState) {
        /* return {
             num: 800
         }*/
        /*if (prevState.num !== nextProps.num)
                     return {
                         num: nextProps.num
                     }*/

        if (prevState.num < nextProps.num)
            return {
                num: nextProps.num
            }
    }

    add = () => {
        this.setState(state => ({
            num: state.num + 1
        }))
    }

    render() {
        const {num} = this.state
        return (
            <div>
                <button
                    onClick={this.add}
                >
                    Clicks ({num})
                </button>
            </div>
        )
    }

}

class App extends Component {

    state = {
        num: 0
    }

    handleChange = (e) => {
        let numero = parseInt(e.target.value)
        if (isNaN(numero)) {
            numero = 0
        }

        this.setState({
            num: numero
        })
    }

    render() {
        const {num} = this.state
        return (
            <div>
                <h1>getDeliveryStateFromProps</h1>
                <h2>{num}</h2>
                <input
                    type="text"
                    onChange={this.handleChange}
                />
                <Contador
                    num={num}
                />
            </div>
        )
    }
}

export default App
