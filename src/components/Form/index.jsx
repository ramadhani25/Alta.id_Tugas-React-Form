import React, { useState } from "react";
import style from "./style.module.css";

const Form = ({ inputs, setInputs, register, setRegister }) => {
  const textRegex = /^[a-zA-Z ]+$/;
  const numRegex = /^[0-9]*$/;
  const [errorList, setErrorList] = useState([]);
  const handleInput = (value, i) => {
    const newInputs = { ...inputs, [i]: value };
    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    const error = [];
    e.preventDefault();

    const { name, email, phone, education, kelas, image } = inputs;

    // Name
    !textRegex.test(name) && error.push("Nama hanya boleh berupa huruf.");
    name.length === 0 && error.push("Nama tidak boleh kosong.");

    // Email
    email.length === 0 && error.push("Email tidak boleh kosong.");

    // Phone
    !numRegex.test(phone) &&
      error.push("No Handphone hanya boleh berupa angka.");
    phone.length === 0 && error.push("No Handphone tidak boleh kosong.");

    // Education
    education === "" &&
      error.push("Pilih salah satu Latar Belakang Pendidikan.");

    // Kelas
    kelas === "" && error.push("Pilih salah satu Kelas Coding.");

    // Image
    image === "" && error.push("Upload foto surat.");

    if (error.length) {
      setErrorList(error);
    }

    if (error.length === 0) {
      setRegister([...register, inputs]);
      setInputs({
        name: "",
        email: "",
        phone: "",
        education: "",
        kelas: "",
        image: "",
        description: "",
      });
      setErrorList([]);
      alert(`Data Pendaftar ${inputs.name} Berhasil Diterima`);
    } else {
      alert(`Data Pendaftar Tidak Sesuai`);
    }
  };

  const handleReset = (e) => {
    setTimeout(() => {
      e.preventDefault();
      setInputs({
        name: "",
        email: "",
        phone: "",
        education: "",
        kelas: "",
        image: "",
        description: "",
      });
      setErrorList([]);
    }, 1);
  };

  return (
    <div className={style.form_container}>
      <form onReset={handleReset}>
        <div className={style.input_container}>
          <label>Nama</label>
          <br />
          <input
            className={style.input}
            type="text"
            required
            placeholder="Masukkan Nama"
            value={inputs.name}
            name="name"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>

        <div className={style.input_container}>
          <label>Email</label>
          <br />
          <input
            className={style.input}
            type="email"
            required
            placeholder="Masukkan Email"
            value={inputs.email}
            name="email"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>

        <div className={style.input_container}>
          <label>No Handphone</label>
          <br />
          <input
            className={style.input}
            type="text"
            required
            minLength="9"
            maxLength="14"
            placeholder="Masukkan No Handphone"
            value={inputs.phone}
            name="phone"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>

        <div className={style.input_container}>
          <label>Latar Belakang Pendidikan</label>
          <br />
          <input
            className={style.radio_btn}
            required
            type="radio"
            name="education"
            value="IT"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
          {"IT"}
          <input
            className={style.radio_btn}
            required
            type="radio"
            name="education"
            value="Non-IT"
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
          {"Non IT"}
        </div>

        <div className={style.input_container}>
          <label>Kelas Coding yang Dipilih</label>
          <br />
          <select
            className={style.input}
            name="kelas"
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

        <div className={style.input_container}>
          <label>Foto Surat Kesungguhan</label>
          <br />
          <input
            className={style.input}
            type="file"
            required
            name="image"
            onChange={(e) => handleInput(e.target.files[0].name, e.target.name)}
          />
        </div>

        <div className={style.input_container}>
          <label>Harapan Untuk Coding Bootcamp Ini</label>
          <br />
          <textarea
            className={style.input}
            name="description"
            value={inputs.description}
            onChange={(e) => handleInput(e.target.value, e.target.name)}
          />
        </div>

        <div style={{ color: "red", fontSize: "12px", margin: "15px 20px" }}>
          <ul>
            {errorList.map((item, itemIdx) => (
              <li key={itemIdx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={style.container_button}>
          <button className={style.button} onClick={handleSubmit}>
            Submit
          </button>
          <input className={style.button} type="reset" />
        </div>
      </form>
    </div>
  );
};

export default Form;
