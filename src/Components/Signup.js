import React, { useRef, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

// var passCheckDigits = document.querySelectorAll(".digitCheck666");
// var passCheckLength = document.querySelectorAll(".lengthCheck666");

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    //logic to check password
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      console.log(emailRef.current.value, passwordRef.current.value);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      //if failx
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <>
      <Container>
        <Typography variant="h4">Sign Up</Typography>

        {/* if there is an error display it */}
        {error && <Alert severity="error">{error}</Alert>}
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <FormControl id="email" fullWidth>
            <TextField
              label="Email"
              aria-describedby="email-helper-text"
              variant="outlined"
              type="email"
              name="email"
              inputRef={emailRef}
              required
            />
            <FormHelperText id="email-helper-text">
              Enter your email address
            </FormHelperText>
          </FormControl>
          <FormControl id="password" fullWidth>
            <TextField
              label="Password"
              aria-describedby="password-helper-text"
              variant="outlined"
              type="password"
              name="password"
              inputRef={passwordRef}
              required
            />
            <FormHelperText id="password-helper-text" component={"span"}>
              Enter your password. Your password must contain:
              <ul>
                <li>At least 8 Characters</li>
                <li>At least one Number</li>
                <li>At least one capitalized and lower case character</li>
              </ul>
            </FormHelperText>
          </FormControl>
          <FormControl id="password-confirm" fullWidth>
            <TextField
              label="Password Confirmation"
              aria-describedby="password-confirm-helper-text"
              variant="outlined"
              type="password"
              name="password-confirm"
              inputRef={passwordConfirmRef}
              required
            />
            <FormHelperText id="password-confirm-helper-text">
              Re-Enter Your Password
            </FormHelperText>
          </FormControl>
        </form>
        <Button
          disable={loading ? "disable" : undefined}
          variant="contained"
          type="submit"
        >
          Sign Up
        </Button>
        <Typography>
          Already have an account? <Link to="login">Log In?</Link>
        </Typography>
      </Container>
    </>
  );
}
