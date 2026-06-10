import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  //fetch connections
  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      // handle error case
      console.log(err);
      
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);
  
  if (!connections?.length) {
    return (
      <h1 className="text-center text-2xl my-10">No Connections Found!!</h1>
    );
  }

  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-4xl mb-8">Connections</h1>

      <div className="flex flex-col items-center">
        {connections.map((connection) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;

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

export default Connections;
