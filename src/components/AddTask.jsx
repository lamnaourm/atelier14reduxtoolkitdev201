import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addtache } from '../redux/TodoSlice';

export default function AddTask() {

    const [tache, setTache] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" name="tache" id="tache" value={tache} onChange={(e) => setTache(e.target.value)} />
        <button onClick={() => dispatch(addtache(tache))}><IoMdAddCircle /></button>
    </div>
  )
}
