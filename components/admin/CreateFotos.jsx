import { useState } from "react";
import axios from "axios";

const CreateFotos = () => {
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [tempat, setTempat] = useState("");
  const [waktu, setWaktu] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/fotos", {
          id,
          nama,
          tempat,
          waktu,
        })
        .then((response) => {
          console.log(response);
        });
      alert("Penambahan Data sukses");
      clearInput();
    } catch (e) {
      throw Error(e.message);
    }
  }
  const clearInput = () => {
    setId("");
    setNama("");
    setTempat("");
    setWaktu("");
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 text-center">Input Data </h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nim"
                type="text"
                placeholder="NIM"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <label htmlFor="nim">ID</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nama"
                type="text"
                placeholder="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <label htmlFor="nama">Nama</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="tempat"
                type="text"
                placeholder="tempat"
                value={tempat}
                onChange={(e) => setTempat(e.target.value)}
              />
              <label htmlFor="angkatan">Tempat</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="waktu"
                type="text"
                placeholder="Waktu"
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
              />
              <label htmlFor="prodi">Waktu</label>
            </div>
          </div>
          <div className="w-75 d-flex flex-row-revverse">
            <button className="btn btn-primary" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFotos;
