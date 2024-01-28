import React from 'react'
import './Nav.css'

export default function Nav(Props) {
  let keys = Object.keys(Props.value)
  console.log(keys)
  return (
    <div>
      <ul>
       { keys.map((key)=><li><a className='navLink' href={Props.value[key]}>{key.replace("_"," ")}</a></li>)}
      </ul>
    </div>
  )
}
