import React, { useRef, useState } from "react";
import Container from "@material-ui/core/Container";

import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";

import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // call signup function and passin email and password through try/catch, after clearing setError
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      //if failx
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <>
      <Container>
        <Typography variant="h4">Log In</Typography>
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
              Enter your password.
            </FormHelperText>
          </FormControl>
        </form>
        <Button
          disable={loading ? "disable" : undefined}
          variant="contained"
          onClick={handleSubmit}
        >
          Log In
        </Button>
        <Typography>
          Need an account?
          <Link to="signup">Sign Up!</Link>
        </Typography>
      </Container>
    </>
  );
}
