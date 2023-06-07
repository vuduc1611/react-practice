import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setisShowPassword] = useState(false);
  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title"> Log in</div>
        <div className="text"> Email or Username</div>
        <input
          type="text"
          placeholder="Email or Username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="Password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <i
            class={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setisShowPassword(!isShowPassword)}
          ></i>
        </div>
        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
        >
          Login
        </button>
        <div className="back ">
          <i class="fa-solid fa-angles-left"></i> Go back
        </div>
      </div>
    </>
  );
};

export default Login;
