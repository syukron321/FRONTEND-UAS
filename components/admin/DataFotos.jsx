import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const DataFotos = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusFotos(id) {
    // setDeleting(true)
    try {
      const response = await axios.delete(`http://localhost:5000/fotos/${id}`);

      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Foto dengan ${id} telah terhapus`);
    } catch (error) {
      console.log({ message: error.message });
    }

    router.push("/admin/datafotos");
  }
  return (
    <div className="container">
      <h3>Data Foto</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Tempat</th>
            <th>Waktu</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fts, idx) => (
            <tr key={idx}>
              <td>{fts.id}</td>
              <td>{fts.nama}</td>
              <td>{fts.tempat}</td>
              <td>{fts.waktu}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <Link
                    href={`/admin/updatefotos?id=${fts.id}
                                        &nama=${fts.nama}&tempat=${fts.tempat}
                                        &waktu=${fts.waktu}`}
                  >
                    <a>Edit</a>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    value={fts.id}
                    onClick={(e) => hapusFotos(e.target.value)}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFotos;
