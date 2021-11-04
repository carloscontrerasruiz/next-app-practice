import Image from "next/image";
import { useRouter } from "next/router";

const Pokemon = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Cargando.....</p>;
  }
  return (
    <div>
      <h1>
        {data.name} numero # {data.id}
      </h1>
      <Image src={data.sprites.front_default} width={400} height={400} />
    </div>
  );
};

/*export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
};*/

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return {
    paths,
    fallback: true, //cuando esta en false solo va a renderizar las paginas declaradas
    //en true tratara de renderizarlo de manera lazy pero en el componente debemos
    //verificar que sea falback
    //si en lugar de mandar true se manda 'blocking' el servidor no regresara nada
    //hasta que tenga los datos es decir no sera necesario el loading en el componente
  };
};

export default Pokemon;
