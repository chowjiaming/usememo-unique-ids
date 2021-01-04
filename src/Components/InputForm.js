import { Form, Button, Col } from "react-bootstrap";
import useUniqueId from "../helpers/useUniqueId";

export default function InputForm({ handleChange }) {
  const generateId = useUniqueId();
  return (
    <Col lg="5" className="mb-2">
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name={generateId("email")}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name={generateId("name")}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
}
