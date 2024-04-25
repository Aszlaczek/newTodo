import { useState } from 'react'
import './App.scss'
import Form from './Form'
const App = () => {
    const [name, setName] = useState()
    const handleData = (data: string) => {
        setName(data)
    }
    return (
        <div className='container'>
            <Form sendData={handleData} />
            <button onClick={() => console.log(name)}>Show</button>
        </div>
    )
}

export default App