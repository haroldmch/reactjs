import React from 'react'
import Button from './components/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css' 
// :D
const App = () => {

    const clickHandlerFunction = text => {
        console.log(text)
    }

    return (<main className='react-calculator'>
        <Result value={"0"}/>
        <Numbers onClickNumber={text => { console.log(text) }}/>
        <Functions
            onContentClear={() => { console.log('Clear!') }}
            OnDelete={ () => { console.log('Delete') } }
        />
        <MathOperations
            onClickOperation = { operation => console.log(operation) }
            onClickEqual = { operation => console.log(operation) }/>
    </main>)
}

export default App
