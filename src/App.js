import React, {Component} from "react";

const Title = ({uiColor, children}) => {
    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }
    console.log(children)
    return (
        <h1 style={styles}>
            {children}
        </h1>
    )
}

class App extends Component {
    state = {
        uiColor: 'purple'
    }

    render() {
        const {uiColor} = this.state
        return (
            <div>
                <Title
                    uiColor={uiColor}
                >
                    Hola <em>Mundo! :D</em>
                </Title>
            </div>
        )
    }
}


export default App
