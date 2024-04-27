import React, { useEffect } from "react";
import axios from "axios";
import UserSkillBadges from "./UserSkillBadges";

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const UserPreviewCard = ({ user }) => {
  const [skills, setSkills] = React.useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/user_skills/" + user.id).then((res) => {
      setSkills(res.data);
    });
  }, []);

  return (
    <div className="mx-10 px-10 border-2 rounded-lg border-black mb-2">
      <div className="flex justify-between pt-4">
        <h3 className="font-bold text-xl">{user.name}</h3>
        <p className="text-white bg-indigo-700 px-2 rounded-xl ">2 matches</p>
      </div>
      <UserSkillBadges skills={skills} />
    </div>
  );
};

export default UserPreviewCard;