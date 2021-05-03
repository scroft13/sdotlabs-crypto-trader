import React, { useRef, useState } from "react";
import Container from "@material-ui/core/Container";

import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";

import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Container>
        <Typography variant="h4">Reset Password</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}
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

          <Button disabled={loading} type="submit">
            Reset Password
          </Button>
        </form>
        <div className="w-100 text-center mt-3">
          <Link to="/login">Login</Link>
        </div>
        <Typography>
          Need an account?
          <Button variant="contained">
            <Link to="signup">Sign Up!</Link>
          </Button>
        </Typography>
      </Container>
    </>
  );
}
