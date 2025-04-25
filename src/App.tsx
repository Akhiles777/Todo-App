import { useState } from 'react'

import {ChangeEvent,MouseEvent} from "react";

import './App.css'



/*interface Todo{
    text: string,
    done: boolean,
    todos: object,
    id: number
}*/

function App() {

    const [todos,setTodos] = useState<string[]>([])
    const [text, setText] = useState<string>('')
/*
    const [done, setDone] = useState<boolean>(false)
*/
    const [size, setSize] = useState<string>('App')


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)

    }


    const onSubmit = (e: MouseEvent<HTMLButtonElement>)=> {
e.preventDefault()

        setTodos([...todos,text])
        setText('')

        setSize('App-none')


        if(!text){
            setSize('App')
            alert('Введите задачу')
            return
        }


    }


    const onSize = (e: MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault()

   setSize('App')
        setText('')

    }


  return (
      <div>
          <button onClick={onSize} className='btn'>+</button>


          <div className={size}>

              <h2>Todo-APP</h2>

              <div className="input-container">
                  <input onChange={onChange} value={text} placeholder="Введите задачу" className="input-field"
                         type="text"/>
                  <label htmlFor="input-field" className="input-label">Добавьте задачу</label>
                  <span className="input-highlight"/>
              </div>

              <button onClick={onSubmit} className='btn-input'>Добавить задачу</button>
          </div>


          {todos.map(todo => {
              return (
                  <div>
                      {todo}
                      <input type='checkbox'/>
                  </div>
              )
          })}

      </div>
  )
}

export default App
