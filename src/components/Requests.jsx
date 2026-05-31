import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../store/requestsSlice";

const Requests = () => {
    const requests=useSelector((store)=> store.requests)
  const dispatch = useDispatch();
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/allrequests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      //handle err
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests?.length) {
    return (
      <h1 className="text-center text-2xl my-10">No Requests Found!!</h1>
    );
  }

  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-4xl mb-8">Connections Requests Recevied</h1>

      <div className="flex flex-col items-center">
        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

          return (
            <div
              key={_id}
              className="m-4 p-4 w-1/2 border rounded-lg bg-base-300 flex"
            >
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />

              <div className="ml-4">
                <h2 className="font-bold text-xl">
                  {firstName} {lastName}
                </h2>

                {age && gender && (
                  <p>
                    {age}, {gender}
                  </p>
                )}

                <p>{about}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

 
};

export default Requests;
