import React, { useState } from "react"

import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import { useAuth } from "../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Container>
      {error && <Alert severity="error">{error}</Alert>}
          <Typography >Profile</Typography>
          
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile">
            Update Profile
          </Link>
        
      
     
        <Button variant="contained" onClick={handleLogout}>
          Log Out
        </Button>
        </Container>
    </>
  )
}