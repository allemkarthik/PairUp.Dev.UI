import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/data";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setage] = useState(user.age);
  const [about, setabout] = useState(user.about);
  const [skills, setskills] = useState(
    Array.isArray(user.skills) ? user.skills.join(", ") : user.skills || "",
  );
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          about,
          skills: skills.split(",").map((s) => s.trim()),
          age,
        },
        { withCredentials: true },
      );
      console.log(res);
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">FirstName</legend>
                  <input
                    type="text"
                    value={firstName}
                    className="input"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">lastName</legend>
                  <input
                    type="text"
                    value={lastName}
                    className="input"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">photoUrl</legend>
                  <input
                    type="text"
                    value={photoUrl}
                    className="input"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">skills</legend>
                  <input
                    type="text"
                    value={skills}
                    className="input"
                    onChange={(e) => setskills(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">about</legend>
                  <input
                    type="text"
                    value={about}
                    className="input"
                    onChange={(e) => setabout(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">age</legend>
                  <input
                    type="number"
                    value={age}
                    className="input"
                    onChange={(e) => setage(e.target.value)}
                  />
                </fieldset>
              </div>
              <p className="text-red-600">{error}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, about, skills, age }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>profile saved sucuessfully</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
