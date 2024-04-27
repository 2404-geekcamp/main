import React, { useEffect } from 'react'
import axios from 'axios'

const home = () => {
  let [message, setMessage] = React.useState('')

  useEffect(() => {
    const axiosInstance = axios.create({
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
    },
  });
    const res = axiosInstance.get(`http://localhost:3001/feeds`, {
    }).then((res) => {
      console.log(res.data);
      setMessage(res.data.message)
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  return (
    <h1>{ message }</h1>
  )
}

export default home;
