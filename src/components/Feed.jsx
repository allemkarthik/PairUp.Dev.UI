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
  return (
    feed &&
    <div className="flex justify-center my-10">
      <UserCard  user={feed[1]}/>
    </div>
  );
};

export default Feed;
