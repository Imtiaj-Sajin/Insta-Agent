import React, { useState } from 'react';
import Inbox from './Inbox';

const sampleMessages = [
  { id: 1, name: "John Doe", text: "Hello! How are you?", avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg", status: "unanswered" },
  { id: 2, name: "Jane Doe", text: "Can you help with my order?", avatar: "https://source.unsplash.com/random/50x50?sig=2", status: "answered-agent1" },
  { id: 3, name: "Alice", text: "Thank you for your response!", avatar: "https://source.unsplash.com/random/50x50?sig=3", status: "answered-agent2" },
  // More sample messages...
];

const Messages = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);

  const filteredMessages = sampleMessages.filter((msg) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Unanswered") return msg.status === "unanswered";
    if (selectedFilter === "Agent1") return msg.status === "answered-agent1";
    if (selectedFilter === "Agent2") return msg.status === "answered-agent2";
    return true;
  });

  const selectedMessage = sampleMessages.find((msg) => msg.id === selectedMessageId) || null;

  return (
    <div className="message-container flex">
      {/* Left Column: Message List (30%) */}
      <div className="messages-list p-4 w-1/3">
        <div className="header flex items-center justify-between">
          <h1 className="text-xl font-bold">Inbox</h1>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option>All</option>
            <option>Unanswered</option>
            <option>Agent1</option>
            <option>Agent2</option>
          </select>
        </div>

        <div className="message-list mt-4">
          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className={`message-item flex items-center p-2 cursor-pointer ${
                selectedMessageId === msg.id ? "bg-gray-100" : ""
              }`}
              onClick={() => setSelectedMessageId(msg.id)}
            >
              <img src={msg.avatar} alt={msg.name} className="avatar w-8 h-8 rounded-full mr-2" />
              <div className="text">
                <h2 className="font-semibold">{msg.name}</h2>
                <p className="text-sm text-gray-500 truncate">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Inbox (70%) */}
      <div className="message-inbox p-4 w-2/3">
        <Inbox selectedMessage={selectedMessage} />
      </div>
    </div>
  );
};

export default Messages;
