import React, {Component} from "react";

const frutas = [
    'Feresa',
    'Manzana',
    'Sadia',
    'Kiwi',
    'Durazno',
    'Mango',
    'Piña'
]

class App extends Component {
    render() {
        return (
            <div>
                <lu>
                    {frutas.map((fruta) => {
                        return (<li>{fruta}</li>)
                    })}
                </lu>
            </div>
        )
    }
}

export default App
