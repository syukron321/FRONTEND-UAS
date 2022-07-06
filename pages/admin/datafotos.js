import DataFotos from "../../components/admin/DataFotos";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import FotosById from "../../components/admin/FotosById";

const dataFotos = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <LayoutAdmin>
      <FotosById />
      <DataFotos data={data} />
    </LayoutAdmin>
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

export default dataFotos;
