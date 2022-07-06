import { useRouter } from "next/router";
import { useState } from "react";

const UserById = () => {
  const [id, setId] = useState("");
  const router = useRouter();
  const getFtsById = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/user/user",
      query: { id: id },
    });
  };
  return (
    <div className="container">
      <form onSubmit={getFtsById}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col d-flex flex-reverse">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Foto By Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <input
              type="submit"
              value="Cari"
              className="btn btn-success ms-2 fs-6"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserById;
