import React from 'react'
import { MdDelete } from "react-icons/md";

export default function DeleteTasks() {
  return (
    <div>
        <button><MdDelete /> Tous</button>
        <button><MdDelete /> Terminès</button>
        <button><MdDelete /> Non Terminès</button>
    </div>
  )
}
