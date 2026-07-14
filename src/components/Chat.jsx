import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Chat = () => {
  const { targetUserId } = useParams();

  const [messages, setMessages]= useState()

  //subscribe to the store to get user info
  const connections = useSelector((store) => store.connections);

  //find recevier user in connections
  const receiver = connections?.find((user) => user._id == targetUserId);
  console.log(receiver);
  

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-3xl h-[80vh] bg-base-200 rounded-xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="border-b border-base-300 px-6 py-4 flex items-center gap-4">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={receiver.photoUrl} alt="profile" />
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg">Developer</h2>
            <p className="text-sm opacity-70">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Receiver */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pravatar.cc/100?img=10" />
              </div>
            </div>

            <div className="chat-bubble">Hi 👋</div>

            <div className="chat-footer opacity-60 text-xs">10:20 AM</div>
          </div>

          {/* Sender */}
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">
              Hello! How are you?
            </div>

            <div className="chat-footer opacity-60 text-xs">10:21 AM</div>
          </div>

          {/* Receiver */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pravatar.cc/100?img=10" />
              </div>
            </div>

            <div className="chat-bubble">
              I'm doing great. Interested in collaborating?
            </div>

            <div className="chat-footer opacity-60 text-xs">10:22 AM</div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-base-300 p-4 flex gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-1"
          />

          <button className="btn btn-primary px-8">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
