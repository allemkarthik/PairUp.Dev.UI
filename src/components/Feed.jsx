import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      // todo error message dispaly
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return null;

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
      {feed?.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Feed;
