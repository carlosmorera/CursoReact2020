import React from 'react';
import FruitCard from './componentes/FruitCard';

const App = () => (
    <div>
        <FruitCard name={'Apple'} price={2.00}/>
        <FruitCard name='Orange' price={3.00}/>
        <FruitCard name='Kiwi'/>
    </div>
)

export default App;
