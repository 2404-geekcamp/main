import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <header className='justify-between h-[100px] border-b flex text-2xl px-10 font-bold items-center'>
        <Link to={props.backPath}>{props.back}</Link>
        <Link to={props.forWardPath} >{props.forward}</Link>
    </header>
  )
}

