import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import UserCard from "./UserCard";



const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const user = useSelector((store) => store.user);

  // const store = useSelector((store) => store);



  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      getFeed();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex justify-center my-10">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (feed === null) {
  return (
    <div className="flex justify-center my-10">
      <h1>Loading Feed...</h1>
    </div>
  );
}

  if (feed.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <h1 className="text-3xl font-bold">
          No New Developers Found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 my-10">
      {/* it will show one card at a time regardless of accepted or rejected */}
       <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;