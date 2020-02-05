import React from "react";

const Saludo = (props) => {
    if (props.saluda) {
        return (
            <h1>Hola mundo!</h1>
        )
    }

    return (<p>Nada!</p>
    )

}


const App = () => (
    <div>
        <Saludo saluda/>
    </div>
)
export default App
