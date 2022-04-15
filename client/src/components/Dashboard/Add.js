import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

function Add({ link, name }) {
  return (
    <Link to={link} className="w-40">
      <Button name={name} />
    </Link>
  );
}

export default Add;
