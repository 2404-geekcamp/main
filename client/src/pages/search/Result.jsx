import React, { Suspense, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import UserPreviewCard from '../../components/search/UserPreviewCard';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const Result = () => {
  const [users, setUsers] = React.useState([]);
  const params = new URLSearchParams(useLocation().search);
  const skill_ids = params.getAll('skills').map((skill) => skill.id);
  const experience = params.get('experience');
  const stance = params.get('stance');

  useEffect(() => {
    axios
      .post(apiUrl + "/search", { skill_ids, experience, stance })
      .then((res) => {
        setUsers(res.data);
        setLoading(false)
      });
  }, []);
  if(users.length === 0){
    return(
      <div className='max-w-[900px] mx-auto h-screen'>
        <h2 className="text-center text-3xl font-bold py-10">検索結果</h2>
        <div className='flex justify-center items-center mt-[200px] font-bold text-xl'>検索中...</div>
    </div>
      
    )
  }

  return (
    
    <div className='max-w-[900px] mx-auto'>
      <h2 className="text-center text-3xl font-bold py-10">検索結果</h2>
      {users.map((user) => (
        <UserPreviewCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Result;
