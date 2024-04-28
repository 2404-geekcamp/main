import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <header className='justify-between h-[100px] border-b flex text-2xl px-10 font-bold items-center mb-10'>
        <Link to={props.backPath}>{props.back}</Link>
        <h1 className="text-center text-3xl font-bold py-10">{props.title}</h1>
        <Link to={props.forWardPath} >{props.forward}</Link>
    </header>
  )
}

