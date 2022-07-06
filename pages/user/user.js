import DataUser from "../../components/user/DataUser";
import LayoutUser from "../../components/user/LayoutUser";
import FotosById from "../../components/admin/FotosById";

const user = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <LayoutUser>
      <DataUser data={data} />
    </LayoutUser>
  );
};

export async function getServerSideProps({ query }) {
  const id = query.id;
  console.log(id);
  let url = "http://localhost:5000/fotos";
  if (typeof id === "string") {
    url = `http://localhost:5000/fotos/${id}`;
  }
  //  fetch data
  const res = await fetch(url);
  const data = await res.json();

  return { props: { data } };
}

export default user;
