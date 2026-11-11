import { useState } from "react";

import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

import { sendChatMessage } from "./services/chatService";

import { Bot, Trash2 } from "lucide-react";

import "./App.css";

function App() {

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  async function handleSend() {

    if (!question.trim() || loading) return;

    const userQuestion = question.trim();

    setQuestion("");

    setMessages(previous => [
      ...previous,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: userQuestion
      }
    ]);

    setLoading(true);

    try {

      const answer = await sendChatMessage(userQuestion);

      setMessages(previous => [
        ...previous,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: answer
        }
      ]);

    } catch (error) {

      setMessages(previous => [
        ...previous,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Error: ${error.message}`
        }
      ]);

    } finally {

      setLoading(false);

    }
  }

  function clearChat() {
    setMessages([]);
    setQuestion("");
  }

  return (

    <div className="app-container">

      <header className="header">

        <div className="brand">
          <Bot size={28} />

          <div>
            <h2>Simple LLM Chatbot</h2>
            <span>Powered by Gemini AI</span>
          </div>
        </div>

        <button
          className="clear-button"
          onClick={clearChat}
        >
          <Trash2 size={17} />
          Clear Chat
        </button>

      </header>

      <main className="main-content">

        <ChatWindow
          messages={messages}
          loading={loading}
        />

        <ChatInput
          question={question}
          setQuestion={setQuestion}
          onSend={handleSend}
          loading={loading}
        />

      </main>

      <footer>
        AI can make mistakes. Verify important information.
      </footer>

    </div>

  );
}

export default App;