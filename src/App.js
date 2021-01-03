import { useState } from "react";
import { Container } from "react-bootstrap";
import DisplayInput from "./Components/DisplayInput";
import InputForm from "./Components/InputForm";

function App() {
  const [params, setParams] = useState({});
  const handleChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <Container>
      <h1>Generate Unique IDs Demo</h1>
      <InputForm handleChange={handleChange} />
      <InputForm handleChange={handleChange} />
      <DisplayInput params={params} />
    </Container>
  );
}

export default App;
