import React from "react";
import styles from "./signup.module.css";
import { useState } from "react";
import Axios from "axios";
import { response } from "express";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup, error, isLoading} = useSignup()

  const isLoadingValue = isLoading !== null ? isLoading : false
  // const navigate = useNavigate();

  const HandleSubmit = async (e:any) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className={styles.formDiv}>
      <form onSubmit={HandleSubmit} className={styles.form}>
       
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

        <button disabled={isLoadingValue} className={styles.btnn}>Sign up</button>
         {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;

