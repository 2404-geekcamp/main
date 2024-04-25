import React from 'react'
import { useParams } from 'react-router-dom'

const userIdEdit = () => {
  let { id } = useParams();

  return (
    <h1>Edit {id}</h1>
  )
}

export default userIdEdit;
