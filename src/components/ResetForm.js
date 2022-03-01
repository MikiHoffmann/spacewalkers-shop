import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../services/FirebaseConfig";
import { StyledForm } from "./styledComponents/Form.styled";
import { StyledLinkButton } from "./styledComponents/LinkButton.styled";

const ResetForm = () => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [loading, user, navigate]);

  return (
    <StyledForm>
      <legend>
        <h3>Sign Up &#64; spaceWalkers</h3>
      </legend>
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
      <StyledLinkButton
        className="confirmButton"
        onClick={() => sendPasswordReset(email)}
      >
        register
      </StyledLinkButton>
    </StyledForm>
  );
};

export default ResetForm;
