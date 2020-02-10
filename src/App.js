import React, {Component} from "react";

class App extends Component {

    state = {
        user: {
            name: 'Carlos',
            country: 'Colombia',
            twitter: 'tw',
            youtube: 'yt'
        }
    }

    render() {
        const {user} = this.state
        //-> ['name', 'country', 'twitter', 'youtube']
        const keys = Object.keys(user)

        return (
            <div>
                <h3>Iterando Propiedades de objetos</h3>
                <lu>
                    {keys.map((key) => (
                        <li>
                            {key}: {user[key]}
                        </li>
                    ))}
                </lu>
            </div>
        )
    }
}

export default App
