import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'


const initialState = [{
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false
}]


export const TodoApp = () => {


    const [todos] = useReducer(todoReducer, initialState)


    console.log(todos);

    return (
        <div>

            <h1>Todo App</h1>
            <hr />


        </div>
    )
}










