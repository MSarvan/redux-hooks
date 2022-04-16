import { useState } from "react";
import { loginData } from "../Redux/Login/action"; 
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {

    const userdata = { username, password };
    dispatch(loginData(userdata));

  };

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
