import { Form } from "react-bootstrap";
import useUniqueId from "../helpers/useUniqueId";

export default function InputForm({ handleChange }) {
  const generateId = useUniqueId();
  return (
    <Form className="mb-2">
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
    </Form>
  );
}
