import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    <div className='max-w-[900px] mx-auto'>
      <button className='bg-indigo-700 block w-[300px] mx-auto h-[100px] rounded-xl font-bold text-xl text-white mb-40'>
        一緒にハッカソンに出る仲間を探す
      </button>
      <div className='mx-auto px-10'>
        
        <Link to="/chats" className='bg-indigo-700 block text-white h-[70px] rounded-xl font-bold text-xl w-full justify-center flex items-center my-10'>DM一覧</Link>
        <Link to="/invites" className='bg-indigo-700 block text-white h-[70px] rounded-xl font-bold text-xl w-full justify-center flex items-center'>招待メッセージ一覧</Link>
        
      </div>
    </div>
    // <h1>{ message }</h1>
  )
}

export default home;
