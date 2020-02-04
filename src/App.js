import React, {Component} from "react";

const Gato = (props) => (
    <div>
        <h1>
            Gato 🐈🐈🐈🐈🐈🐈🐈🐅🐱
        </h1>
        <pre>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
)

class App extends Component {
    state = {
        force: 100,
        life: 6,
        age: '1 year'
    }

    render() {
        const otherData = {
            race: 'wild',
            nightFights: 10
        }

        return (
            <div>
                <Gato
                    name='Felix'
                    age='2 years'
                    {...otherData}
                    {...this.state}
                />
            </div>

        )
    }
}

export default App
