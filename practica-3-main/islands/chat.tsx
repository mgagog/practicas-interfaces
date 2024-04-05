import { useEffect, useState } from "preact/hooks";

type Message = {
  id: string;
  idUser: string;
  message: string;
  createdAt: string;
};

export default function Chat({
  id,
}: {
  id: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");

  function fetchMessages() {
    fetch(`/api/message?id=${id}`)
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }

  function sendMessage() {
    fetch(`/api/message?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUser: id,
        message,
      }),
    })
      .then(() => {
        setMessage("");
        fetchMessages();
      });
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 150px)",
        width: "100%",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: "10px",
          maxHeight: "calc(100vh - 200px)",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-start",
            height: "100%",
            gap: "10px",
            overflowY: "scroll",
          }}
        >
          {messages.map((m) => (
            <div
              key={m.id}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <div>{m.message}</div>
              <div style={{ fontSize: "12px", color: "#777" }}>
                {new Date(m.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        {messages.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            No messages
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) =>
            setMessage(e.currentTarget.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          style={{
            width: "calc(100% - 50px)",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
