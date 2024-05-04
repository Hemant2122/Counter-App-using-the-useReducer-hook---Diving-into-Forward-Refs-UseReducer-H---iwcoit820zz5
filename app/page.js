"use client"

import React, { useReducer } from "react";

function reducer(state, action){
  switch(action.type) {
    case "add":
      return{
        ...state,
        count: state.count + 1,
      }
    break;
    case "delete":
      return{
        ...state,
        count: state.count - 1,
      }
    break;
    case "deleteAll":
      return{
        ...state,
        count: 0,
      }
    break;
  }
  
}

const DEFAULTSTATE = {
  count: 0,
}

export default function Home() {

  const [taskState, dispatch] = useReducer(reducer, DEFAULTSTATE)

  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({type: 'add'})} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({type: 'delete'})}  id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({type: 'deleteAll'})}  id="delAllTaskBtn">Delete all tasks</button>
  <h3 className="counter">Number of Tasks : {taskState.count}</h3>

    {/*Update the above code to achieve the solution*/}
    </div>
  )
}
