import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

export default function ListTasks() {

    const taches = useSelector(state => state.todo.tasks)
  return (
    <div>
        {taches.map(tache => 
            <Task key={tache.id} tache={tache}/>
            )}
    </div>
  )
}
