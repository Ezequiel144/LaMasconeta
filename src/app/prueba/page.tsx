"use client";
import { useState } from "react";

export default function EmailForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [html, setHtml] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const todo = await fetch(`/api/send`, {
      method: "POST",
      body: JSON.stringify({ to, subject, text, html }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    console.log(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="to">Para:</label>
        <input
          type="email"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Asunto:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="text">Texto:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="html">HTML:</label>
        <textarea
          id="html"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />
      </div>
      <button type="submit">Enviar Correo</button>
    </form>
  );
}
