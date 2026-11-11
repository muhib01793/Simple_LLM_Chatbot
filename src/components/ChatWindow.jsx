import { useEffect, useRef } from "react";
import { Bot } from "lucide-react";
import Message from "./Message";

function ChatWindow({ messages, loading }) {

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, loading]);

  return (
    <div className="chat-window">

      {messages.length === 0 && (
        <div className="welcome">
          <Bot size={45} />

          <h2>How can I help you?</h2>

          <p>
            Ask me anything and I will try to help.
          </p>
        </div>
      )}

      {messages.map((message, index) => (
        <Message
          key={message.id || index}
          message={message}
        />
      ))}

      {loading && (
        <div className="loading">
          AI is thinking...
        </div>
      )}

      <div ref={bottomRef} />

    </div>
  );
}

export default ChatWindow;