import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills, emailID } =
    user;

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
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
