import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../services/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { StyledForm } from "../components/styledComponents/Form.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log(email);
  //console.log(password);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // loading animation
      return;
    }
    if (user) navigate("/home");
  }, [user, loading, navigate]);

  return (
    <>
      <StyledForm id="signInForm">
        <legend>
          <h3>Sign In &#64; spaceWalkers</h3>
        </legend>
        <label htmlFor="userName">username</label>
        <input
          type="text"
          id="userName"
          value={email}
          placeholder="please enter your username..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="signInPassword">password</label>
        <input
          type="password"
          id="signInPassword"
          value={password}
          placeholder="please enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttonContainer">
          <StyledLinkButton className="cancelButton">cancel</StyledLinkButton>
          <StyledLinkButton
            className="confirmButton"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            login
          </StyledLinkButton>
        </div>
        
        <div className="buttonContainer">
        <StyledLinkButton onClick={() => signInWithGoogle}>
          Login with Google
        </StyledLinkButton>
        </div>
        <div className="buttonContainer">
          <span>Not an exclusive spaceWalker yet?</span>
          <span>
            Just
            <StyledLinkButton>
              <Link to="/register">register</Link>
            </StyledLinkButton>
            .
          </span>
        </div>
        <Link to="/reset">Forgot Password</Link>
      </StyledForm>
    </>
  );
};

export default LogInForm;
