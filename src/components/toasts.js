import { useState } from "react";
import { Button, Col, Row, Toast } from "react-bootstrap";

function Toastt({ message }) {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  if (!message) {
    return ""
  }

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast onClose={toggleShowB} animation={false}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Message</strong>
            <small>{Date()}</small>
          </Toast.Header>
          <Toast.Body>{message}!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Toastt;
