import { User, Bot } from "lucide-react";

function Message({ message }) {

  const isUser = message.role === "user";

  return (
    <div className={`message ${message.role}`}>

      <div className="message-icon">
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>

      <div className="message-content">
        <strong>
          {isUser ? "You" : "AI Assistant"}
        </strong>

        <p>{message.content}</p>
      </div>

    </div>
  );
}

export default Message;