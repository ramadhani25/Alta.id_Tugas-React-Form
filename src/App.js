import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    class: "",
    image: "",
    description: "",
  });

  const [register, setRegister] = useState([]);

  return (
    <div className="App">
      <Form
        inputs={inputs}
        setInputs={setInputs}
        register={register}
        setRegister={setRegister}
      />
    </div>
  );
}

export default App;
