import { Send } from "lucide-react";

function ChatInput({
  question,
  setQuestion,
  onSend,
  loading
}) {

  return (
    <div className="input-area">

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
        placeholder="Ask anything..."
        disabled={loading}
      />

      <button
        onClick={onSend}
        disabled={loading || !question.trim()}
      >
        <Send size={18} />
        Send
      </button>

    </div>
  );
}

export default ChatInput;