import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/data";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../store/feedSlice";

const UserCard = ({ user }) => {
  if (!user) return null;
  const {
    _id,
    firstName,
    lastName,
    photoUrl,
    age,
    gender,
    about,
    skills,
    emailID,
  } = user;
  const dispatch = useDispatch();

  // sending connection request
  const handleSendRequest = async (status, userid) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userid,
        {},
        { withCredentials: true },
        dispatch(removeUserFromFeed(userid)),
      );
    } catch (err) {}
  };
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img src={photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && <h3>Age: {age}</h3>}
          {gender && <h3>Gender: {gender}</h3>}
          <p>{about}</p>
          <p>Skills: {Array.isArray(skills) ? skills.join(", ") : skills}</p>
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-soft btn-secondary"
              onClick={()=>handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-soft btn-info"
              onClick={()=>handleSendRequest("interested",_id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
