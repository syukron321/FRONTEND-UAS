import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateFotos = () => {
  //deklarasi state
  const [_id, setId] = useState("");
  const [_nama, setNama] = useState("");
  const [_tempat, setTempat] = useState("");
  const [_waktu, setWaktu] = useState("");

  //mengambil data yang dikirim melalui router
  const router = useRouter();
  const { id, nama, tempat, waktu } = router.query;

  useEffect(() => {
    if (typeof id == "string") {
      setId(id);
    }
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof tempat == "string") {
      setTempat(tempat);
    }
    if (typeof waktu == "string") {
      setWaktu(waktu);
    }
  }, [id, nama, tempat, waktu]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/fotos/${_id}`, {
          id: _id,
          nama: _nama,
          tempat: _tempat,
          waktu: _waktu,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push("/admin/datafotos");
    } catch (e) {
      console.log({ message: e.message });
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-blod text-center mb-3">Edit Data Foto</h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="id"
                type="text"
                placeholder="ID"
                value={_id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nama"
                type="text"
                placeholder="nama"
                value={_nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="waktu"
                type="text"
                placeholder="waktu"
                value={_waktu}
                onChange={(e) => setWaktu(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="tempat"
                type="text"
                placeholder="tempat"
                value={_tempat}
                onChange={(e) => setTempat(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex flex-row-reverse w-75">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFotos;
