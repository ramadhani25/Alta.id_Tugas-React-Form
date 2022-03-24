import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    kelas: "",
    image: "",
    description: "",
  });

  const [register, setRegister] = useState([]);

  return (
    <div className="App">
      <h1>Pendaftaran Peserta Coding Bootcamp</h1>
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
