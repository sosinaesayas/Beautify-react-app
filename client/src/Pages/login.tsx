import React from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin()

  const isLoadingValue = isLoading !== null ? isLoading : false;
  const handleSubmit = async (e:any) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit} className={styles.form}>

        <div>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Enter your email"
            onChange={(e: any) => setEmail(e.target.value)}
            value={email} 
          />
        </div>

        <div>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Password"
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className={styles.checkbox}>
          <input className="checkbox-input" type="checkbox" />
          <p className={styles.checkboxP}>Remember me</p>
        </div>

        <button disabled={isLoadingValue} type="submit" className={styles.btnn}>
          Login
        </button>
        {error && <div className="error">{error}</div>}
        <Link to="/forgotPassword">Forgot Password?</Link>

        <div className={styles.signup}>
          <p>Not registered?</p>
          <Link className={styles.signupLink} to="/signup">
            Sign up
          </Link>
        </div>

      </form>
    </div>
  );
};

export default Login;
