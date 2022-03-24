import React, { useState } from "react";
import style from "./style.module.css";

const Form = ({ inputs, setInputs, register, setRegister }) => {
  const regex = /^[A-Za-z ]*$/;
  const [errMsg, setErrMsg] = useState("");

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };
    newInputs[key] = value;

    if (key === "name") {
      if (regex.test(value)) {
        setErrMsg("");
      } else {
        setErrMsg("Input Harus Berupa Huruf.");
      }
    }

    setInputs(newInputs);
    console.log(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRegister([...register, inputs]);
    console.log(register);

    if (errMsg !== "") {
      alert("Data Pendaftar Tidak Sesuai");
    } else {
      alert(`Data Pendaftar ${inputs.name} Berhasil Diterima`);
    }

    setInputs({
      name: "",
      email: "",
      phone: "",
      education: "",
      class: "",
      image: "",
      description: "",
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setInputs({
      name: "",
      email: "",
      phone: "",
      education: "",
      class: "",
      image: "",
      description: "",
    });
    setErrMsg("");
  };

  return (
    <div>
      <h1>Pendaftaran Peserta Coding Bootcamp</h1>
      <form className={style.form_container}>
        <div className={style.input}>
          <label>Nama</label>
          <br />
          <input
            type="text"
            required
            placeholder="Masukkan Nama"
            value={inputs.name}
            name="name"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>

        <div className={style.input}>
          <label>Email</label>
          <br />
          <input
            type="email"
            required
            placeholder="Masukkan Email"
            value={inputs.email}
            name="email"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>

        <div className={style.input}>
          <label>No Handphone</label>
          <br />
          <input
            type="number"
            required
            minLength="9"
            maxLength="14"
            placeholder="Masukkan No Handphone"
            value={inputs.phone}
            name="phone"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>

        <div>
          <label>Latar Belakang Pendidikan</label>
          <br />
          <input
            required
            type="radio"
            name="education"
            value="IT"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />{" "}
          IT
          <input
            required
            type="radio"
            name="education"
            value="Non-IT"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />{" "}
          Non IT
        </div>

        <div className={style.input}>
          <label>Kelas Coding yang Dipilih</label>
          <br />
          <select
            name="class"
            required
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          >
            <option selected disabled>
              Pilih Salah Satu Program
            </option>
            <option value="Coding Backend with Golang">
              Coding Backend with Golang
            </option>
            <option value="Coding Frontend with ReactJS">
              Coding Frontend with ReactJS
            </option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </div>

        <div className={style.input}>
          <label>Foto Surat Kesungguhan</label>
          <br />
          <input
            type="file"
            required
            name="image"
            onChange={(e) => handleInput(e.target.files[0], e.target.name)}
          />
        </div>

        <div className={style.input}>
          <label>Harapan Untuk Coding Bootcamp Ini</label>
          <br />
          <textarea
            name="description"
            value={inputs.description}
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>

        <div style={{ color: "red", fontSize: "12px" }}>{errMsg}</div>

        <div className={style.input}>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
