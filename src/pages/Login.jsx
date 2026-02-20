import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");

  const login = async () => {
    await axios.post("http://localhost:5000/api/auth/login", { email });
    localStorage.setItem("user", email);
    window.location.href = "/builder";
  };

  return (
    <div className="login">
      <h2>Login to continue</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={login}>Continue</button>
    </div>
  );
}