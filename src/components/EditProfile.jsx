import  { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import UserCard from "./UserCard";
import { useNavigate } from "react-router";

const EditProfile = ({ user }) => {
  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();
  if(!userData){
    navigate("/login")
  }
  const dispatch = useDispatch();

  // .env import for cloudinary images
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset =import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  //single state instead of multiple useStates
  const [form, setForm] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    about: user?.about || "",
    skills: Array.isArray(user?.skills)
      ? user.skills.join(", ")
      : user?.skills || "",
    photoUrl: user?.photoUrl || "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // input handler
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //Image Upload (Cloudinary)
  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", uploadPreset);

      // api call to cloudinary images
      const res = await axios.post(
       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
      );

      setForm((prev) => ({
        ...prev,
        photoUrl: res.data.secure_url,
      }));
    } catch (err) {
      setError("Image upload failed");
    }
  };

  // Save Profile
  const saveProfile = async () => {
    try {
      setLoading(true);
      setError("");

      // user details to edit information
      const payload = {
        ...form,
        skills: form.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };

      // api for profile edit
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        payload,
        { withCredentials: true }
      );

      //update user data in redux
      dispatch(addUser(res?.data?.data));

      // show profile updated badge
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);  //visible for 3 seconds
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10 gap-10 flex-wrap">

        {/* EDIT FORM */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">
              Edit Profile
            </h2>

            {/* Profile Image Upload */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Profile Photo</legend>

              {form.photoUrl && (
                <img
                  src={form.photoUrl}
                  alt="profile"
                  className="w-20 h-20 rounded-full mx-auto mb-2"
                />
              )}

              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full"
                onChange={handleImageUpload}
              />
            </fieldset>

            {/* Inputs */}
            {["firstName", "lastName",  "skills", "about"].map(
              (field) => (
                <fieldset className="fieldset" key={field}>
                  <legend className="fieldset-legend">
                    {field}
                  </legend>

                  <input
                    type={field}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </fieldset>
              )
            )}

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Save Button */}
            <div className="card-actions justify-center mt-4">
              <button
                className="btn btn-primary w-full"
                onClick={saveProfile}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Profile"}
              </button>
            </div>
          </div>
        </div>

        {/* LIVE PREVIEW CARD */}
        <UserCard
          user={{
            ...form,
            skills: form.skills
              .split(",")
              .map((s) => s.trim()),
          }}
        />
      </div>

      {/* TOAST */}
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully 🚀</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;