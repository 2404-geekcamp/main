import axios from 'axios';
import React, { useEffect } from 'react'

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const UserSkillBadge = (userSkill) => {
  let skill = "";
  useEffect(() => {
    axios.get(apiUrl + "/skill/" + userSkill.skill_id).then((res) => {
      skill = res.data.name;
    })
  }, [userSkill.skill_id]);

  return (
    <p key={userSkill.id} className="bg-slate-200 rounded-xl p-1 mr-4 mb-4">
      {skill.name}
    </p>
  );
}

export default UserSkillBadge
