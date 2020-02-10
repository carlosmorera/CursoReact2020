import React, {Component} from "react";

class App extends Component {

    state = {
        products: [
            {
                id: 1,
                name: 'Camisa',
                colors: ['#467967', '#05fd88', '#a706ee'],
                price: 20
            },
            {
                id: 2,
                name: 'Jean',
                colors: ['#D35EFF', '#0013FF', '#F34353'],
                price: 32
            },
            {
                id: 3,
                name: 'Zapatos',
                colors: ['#000000', '#0800FC', '#04FC00'],
                price: 320
            },
            {
                id: 4,
                name: 'Medias',
                colors: ['#F7FF00', '#FF7400', '#00FF64'],
                price: 15
            },
            {
                id: 5,
                name: 'Bermuda',
                colors: ['#D5D22B', '#2BD576', '#4F0D9B'],
                price: 30
            }
        ]
    }

    render() {
        return (
            <div>
                <h3>Iterar lista de objetos 🧦 👖 👞 👕</h3>
                <div>
                    {this.state.products.map((product) => {
                        return (
                            <div>
                                $ {product.price} - {product.name}
                                <div>
                                    {product.colors.map((color) => {
                                    return (
                                        <span
                                            style={{
                                                width: '15px',
                                                height: '15px',
                                                borderRaddius: '0.1em',
                                                border: '1px solid gray',
                                                display: 'inline-block',
                                                margin: '0.1em',
                                                background: color
                                            }}
                                        >
                                        </span>
                                    )
                                })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App
