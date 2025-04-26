import { useState } from 'react'

import {ChangeEvent,MouseEvent} from "react";

import './App.css'



type Todo = {
    text: string,
    time: string,
}

function App() {

    const [todos,setTodos] = useState<Todo[]>([])
    const [text, setText] = useState<string>('')

    const [done, setDone] = useState<boolean>(false)

    const [size, setSize] = useState<string>('App')

    const [check, setCheck] = useState<string>('span')

    const [time, setTime] = useState<string>('00:00')


    const onChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value)
    }



    const onSubmit = (e: MouseEvent<HTMLButtonElement>)=> {
e.preventDefault()

      setTodos(todos => [
              ...todos,
          {text:text,time:time}
      ])


        setText('')

        setSize('App-none')


        if(!text){
            setTodos([])
            setSize('App')
            alert('Введите задачу')
            return
        }


    }



    const onCheked = () => {

 if(!done){

     setDone(true)

     setCheck('span-line')
 }else {
     setDone(false)
     setCheck('span')
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
                  <input onChange={onChange1} value={text} placeholder="Введите задачу" className="input-field"
                         type="text"/>

                  <h3>Дата начала: <input type='time' className='input-time' value={time} onChange={onChange2}/></h3>
                  <label htmlFor="input-field" className="input-label">Добавьте задачу</label>
                  <span className="input-highlight"/>
              </div>

              <button onClick={onSubmit} className='btn-input'>Добавить задачу</button>
          </div>


          {todos.map(todo => {
              return (
                  <div className='todo-list'>

                      <span className={check}>   {todo.text}</span>
                      <span className={check}>-{todo.time}</span>


                          <input onChange={onCheked} checked={done}  type="checkbox"/>



                  </div>
              )
          })}

      </div>
  )
}

export default App
