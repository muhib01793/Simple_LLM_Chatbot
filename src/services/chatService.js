const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function sendChatMessage(question) {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to send message");
  }

  return data.answer;
}