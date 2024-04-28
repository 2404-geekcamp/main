import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData =  {
      'username': username,
      'email':    email,
      'password': password
    };
    axios.post(apiUrl + '/signup', formData)
      .then((res) => {
        if(!res.data.success) return;
        navigate('/init-profile');
      });
  }

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className='h-screen pt-32'>
      <h1 className='text-center text-3xl font-bold my-10'>新規登録</h1>
      <form onSubmit={handleOnSubmit} className='flex flex-col mx-auto w-[300px]'>
        <label htmlFor="username">ユーザー名</label>
        <input type="text" name="username" id="username" onChange={handleChangeUsername} className='mt-[5px] mb-[20px] h-[40px] border-2'/>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" id="email" onChange={handleChangeEmail} className='mt-[5px] mb-[20px] h-[40px] border-2'/>
        <label htmlFor="password">パスワード</label>
        <input type="password" name="password" id="password" onChange={handleChangePassword} className='mt-[5px] mb-[20px] h-[40px] border-2'/>
        <button type="submit" className='w-[200px] bg-black text-white mx-auto h-[40px]'>登録</button>
      </form>
      <Link to="/signin" className='block text-center mt-[40px] text-blue-500'>ログイン画面へ</Link>
    </div>
  )
}

export default SignUp;
