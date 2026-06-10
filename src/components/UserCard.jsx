import axios from "axios";
import { BASE_URL } from "../utils/data";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../store/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
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
    
  } = user;

  // sending connection request
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
         `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      //handle error here
      console.error(err);
    }
  };
   return (
    <div className="w-full max-w-md">
      <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">

        {/* Image */}
        <figure className="h-80 overflow-hidden">
          <img
            src={photoUrl}
            alt={firstName}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body">

          {/* Name */}
          <h2 className="card-title text-2xl">
            {firstName} {lastName}
          </h2>

          {/* Age + Gender */}
          <div className="flex gap-3 text-sm text-gray-500">
            {age && <span>🎂 {age}</span>}
            {gender && <span>👤 {gender}</span>}
          </div>

          {/* About */}
          <p className="mt-2 text-sm leading-relaxed">
            {about || "No bio available"}
          </p>

          {/* Skills */}
          {skills?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-primary badge-outline"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="card-actions justify-between mt-6">

            <button
              className="btn btn-outline btn-error flex-1"
              onClick={() =>
                handleSendRequest("ignored", _id)
              }
            >
              ❌ Ignore
            </button>

            <button
              className="btn btn-primary flex-1"
              onClick={() =>
                handleSendRequest("interested", _id)
              }
            >
              ❤️ Connect
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;