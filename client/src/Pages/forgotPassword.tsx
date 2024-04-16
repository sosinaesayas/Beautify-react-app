import React from "react";
import styles from "./signup.module.css";
import { useState } from "react";
import Axios from "axios";
import { response } from "express";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgotPassword =() =>{

const [email, setEmail] = useState("");

const navigate = useNavigate();

const HandleSubmit = (e: any) => {
  e.preventDefault();
  Axios.post("http://localhost:3000/forgotPassword", { 
    email,
  })
    .then((response) => {
      if(response.data.status){
        alert("check your email for reset password link")
        navigate("/login")
      }

    })
    .catch((err) => {
      console.log(err);
    });
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
      />
    </div>
    

    <button type="submit" className={styles.btnn}>
      Send
    </button>
  </form>
</div>
)
}

export default ForgotPassword
