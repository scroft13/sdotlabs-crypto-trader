import React from "react";

import Container from "@material-ui/core/Container";
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

import { useAuth } from "../Contexts/AuthContext";
//import { Link } from "react-router-dom"

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <>
      <Container>
        <strong>Email:</strong> {currentUser.email}
      </Container>
    </>
  );
}
