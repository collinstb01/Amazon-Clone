import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div>
      {
        <div>
          <p>loading.....</p>
          <Spinner animation="border" variant="warning" />
        </div>
      }
    </div>
  );
};

export default Loader;
