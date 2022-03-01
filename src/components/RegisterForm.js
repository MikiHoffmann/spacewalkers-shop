import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../services/FirebaseConfig";
import { StyledForm } from "../components/styledComponents/Form.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  //console.log(signUpEmail);
  //console.log(signUpPassword);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("please enter a name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading,navigate]);

  return (
    <>
      <StyledForm>
        <legend>
          <h3>Sign Up &#64; spaceWalkers</h3>
        </legend>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="please enter your name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="eMail">email</label>
        <input
          type="text"
          id="eMail"
          value={email}
          placeholder="please enter your email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="setPassword">password</label>
        <input
          type="password"
          id="setPasswword"
          value={password}
          placeholder="please choose a password..."
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <div className="buttonContainer">
          <StyledLinkButton className="cancelButton">cancel</StyledLinkButton>
          <StyledLinkButton className="confirmButton" onClick={register}>
            register
          </StyledLinkButton>
          <StyledLinkButton className="confirmButton" onClick={signInWithGoogle}>
            register with Google
          </StyledLinkButton>
        </div>
      </StyledForm>
    </>
  );
};

export default RegisterForm;
