import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { createSocketConnection } from "../utils/socket";
import { useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/data";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [receiver, setReceiver] = useState(null);

  //instead of multiple socket creation
  const socketRef = useRef(null);

  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const firstName = user?.firstName;

  //make an api call for chat messages from DB
  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    const chatMessages = chat?.data?.messages.map((msg) => {
      return {
        firstName: msg?.senderId?.firstName,
        lastName: msg?.senderId?.lastName,
        text: msg.text,
      };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    if (targetUserId) {
      fetchChatMessages();
    }
  }, [targetUserId]);

  //connect to socket server
  useEffect(() => {
    if (!userId) return;
    socketRef.current = createSocketConnection();
    //as soon as page loads, socket connection is made and joinchat event is emitted
    socketRef.current.emit("joinChat", { userId, targetUserId });

    //take messageRecevied event from server
    socketRef.current.on("messageRecevied", ({ firstName, text }) => {
      setMessages((messages) => [...messages, { firstName, text }]);
    });

    //when compo is unmount then disconnect socket
    return () => {
      socketRef.current.disconnect();
    };
  }, [userId, targetUserId]);

  //find recevier details  in connections
  useEffect(() => {
    const fetchRecevier = async () => {
      const res = await axios.get(BASE_URL + "/user/" + targetUserId, {
        withCredentials: true,
      });
      setReceiver(res.data)
    };
    fetchRecevier();
  }, [targetUserId]);

  //handle send message function
  const sendMessage = () => {
    //if empty message
    if (!newMessage.trim()) return;

    socketRef.current.emit("sendMessage", {
      firstName: firstName,
      userId,
      targetUserId,
      text: newMessage,
    });

    // Clear input after sending
    setNewMessage("");
  };

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-3xl h-[80vh] bg-base-200 rounded-xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="border-b border-base-300 px-6 py-4 flex items-center gap-4">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={receiver?.photoUrl} alt="profile" />
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg">
              {receiver?.firstName}{" "}{receiver?.lastName}
            </h2>
            <p className="text-sm opacity-70">Online</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat ${
                msg.firstName === firstName ? "chat-end" : "chat-start"
              }`}
            >
              <div
                className={`chat-bubble ${
                  msg.firstName === firstName ? "chat-bubble-primary" : ""
                }`}
              >
                {msg.text}
              </div>

              <div className="chat-footer opacity-60 text-xs">
                {msg.firstName}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-base-300 p-4 flex gap-3">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-1"
          />

          <button
            disabled={!newMessage.trim()}
            onClick={sendMessage}
            className="btn btn-primary px-8"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
