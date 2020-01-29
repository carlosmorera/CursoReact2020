import React from "react";
import ReactDom from 'react-dom'

//Define funtional Component
const FruitTarjet = () => (
    <div>
        <hh3>Title</hh3>
    <hr/>
    <p>Description...</p>
    </div>
)

const App = () =>(
    <div>
        <FruitTarjet/>
        <FruitTarjet></FruitTarjet>

    </div>
)

ReactDom.render(<App/>,document.getElementById('root'))
