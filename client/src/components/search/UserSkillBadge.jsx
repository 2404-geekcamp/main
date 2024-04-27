import axios from 'axios';
import React, { useEffect } from 'react'

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const UserSkillBadge = ({ skill }) => {
  const [skillName, setSkillName] = React.useState("");
  useEffect(() => {
    axios.get(apiUrl + "/skill/" + skill.id).then((res) => {
      setSkillName(res.data.name);
    })
  }, []);

  return (
    <p key={skill.id} className="bg-slate-200 rounded-xl p-1 mx-2">
      {skillName}
    </p>
  );
}

export default UserSkillBadge
