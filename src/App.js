import React, {Component} from "react";

class App extends Component {
    state = {
        active: true
    }
    handleChange = (event) => {

        this.setState({
            active: event.target.checked
        })
    }

    render() {
        const {active} = this.state
        return (
            <div>
                <form>
                    <input
                        type="checkbox"
                        checked={active}
                        onChange={this.handleChange}
                    />
                </form>
                {active && (
                    <h1>
                        Etiqueta checkbox
                    </h1>
                )}


            </div>
        )
    }
}

export default App
