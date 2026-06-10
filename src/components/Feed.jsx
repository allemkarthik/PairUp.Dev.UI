import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { BASE_URL } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  // pagination state
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // prevent duplicate calls
  const isFetching = useRef(false);

  const getFeed = async (pageNumber) => {
    if (loading || !hasMore || isFetching.current) return;

    try {
      isFetching.current = true;
      setLoading(true);

      const res = await axios.get(
        `${BASE_URL}/feed?page=${pageNumber}&limit=10`,
        { withCredentials: true }
      );

      const newUsers = res?.data?.data || [];

      // reset or append handled in reducer
      dispatch(addFeed({ users: newUsers, reset: pageNumber === 1 }));

      if (newUsers.length < 10) {
        setHasMore(false);
      }

      // 🔥 increment ONLY after successful fetch
      setPage((prev) => prev + 1);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  // initial load
  useEffect(() => {
    if (user) {
      setPage(1);
      setHasMore(true);
      getFeed(1);
    }
  }, [user]);

  // infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        getFeed(page);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, hasMore, loading]);

  if (!user) {
    return (
      <div className="flex justify-center my-10">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!feed) {
    return (
      <div className="flex justify-center my-10">
        <h1>Loading Feed...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 my-10">
      {Array.isArray(feed) && feed.map((u) => (
        <UserCard key={u._id} user={u} />
      ))}

      {loading && (
        <p className="text-gray-500">Loading more users...</p>
      )}

      {!hasMore && (
        <p className="text-gray-400">No more users</p>
      )}
    </div>
  );
};

export default Feed;