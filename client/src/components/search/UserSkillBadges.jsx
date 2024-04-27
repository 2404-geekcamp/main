import React, {useEffect} from 'react'
import axios from 'axios';
import UserSkillBadge from './UserSkillBadge';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const UserSkillBadges = ({skills}) => {
  return (
    <div className="flex flex-wrap py-4">
      {
        skills.map((skill) => (
          <p key={skill.id} className="bg-slate-200 rounded-xl p-1 mr-4 mb-4">
            <UserSkillBadge skill={skill} />
          </p>
        ))
      }
    </div>
  );
}

export default UserSkillBadges
