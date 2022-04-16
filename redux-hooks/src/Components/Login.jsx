import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
      const userdata = {username, password};
      fetch(`http://localhost:3000`)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="User name"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default Login;
