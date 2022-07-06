import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const DataUser = ({ data }) => {
  return (
    <div className="container">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataUser;
