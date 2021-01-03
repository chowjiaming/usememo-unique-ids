import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function DisplayInput({ params }) {
  return (
    <Jumbotron>
      <p>{JSON.stringify(params)}</p>
    </Jumbotron>
  );
}
