import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function DisplayInput({ params }) {
  const paramKeys = Object.keys(params);
  return (
    <Jumbotron>
      {paramKeys.map((key) => {
        return <p key={key}>{key + ": " + params[key]}</p>;
      })}
    </Jumbotron>
  );
}
