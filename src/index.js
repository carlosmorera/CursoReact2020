import React from "react";
import ReactDom from 'react-dom'

const name = 'Carlos Morera'
//Build object
const user ={
    name : 'Carlos Morera',
    age: 26,
    country: 'Colombia'
}

function getInfo(user) {
    return `Hi my name is ${user.name} and Im from ${user.country} `
}

const App = <h1>{getInfo(user)}</h1>

ReactDom.render(App,document.getElementById('root'))
