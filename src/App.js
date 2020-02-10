import React, {Component} from "react";

const users = [
    {id: 1, name: 'Carlos', country: 'Colombia'},
    {id: 2, name: 'Andres', country: 'Peru'},
    {id: 3, name: 'Felipe', country: 'Argentina'},
    {id: 4, name: 'Christian', country: 'Chile'},
    {id: 5, name: 'Diego', country: 'Ecuador'},
    {id: 6, name: 'Pedro', country: 'Brazil'}
]

class App extends Component {
    render() {
        return (
            <div>
                <h1>Iterando con llaves</h1>
                <ul>
                    {users.map((user) => (
                        <li
                        key={user.id}
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App
