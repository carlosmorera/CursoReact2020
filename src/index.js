import React from "react";
import ReactDom from 'react-dom'

//Define funtional Component
const FruitTarjet = (props) => {
    console.log(props)
 return   <div>
        <h3>{props.name}</h3>
        <hr/>
        <p>$ {props.price}</p>
    </div>
}



const App = () =>(
    <div>
        <FruitTarjet name= {'Apple'} price={2.00}/>
        <FruitTarjet name= 'Orange' price={3.00}/>
        <FruitTarjet name= 'Kiwi'/>
    </div>
)

ReactDom.render(<App/>,document.getElementById('root'))
