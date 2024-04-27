import React from 'react'
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

  axios.post(apiUrl + "/search", { skill_ids, experience, stance }).then((res) => {
    setUsers(res.data);
  })

  return (
    <div className='max-w-[900px] mx-auto'>
      <h2 className="text-center text-3xl font-bold py-10">検索結果</h2>
      <UserPreviewCard />
    </div>
  )
}

export default Result;
