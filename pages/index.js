import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <li>
      <Link href={`/pokemons/${id}`}>{pokemon.name}</Link>
    </li>
  );
};
export default function Home({ pokemons }) {
  return (
    <div>
      <p data-testid="titulo">Pokemones</p>
      <ul>
        {pokemons.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />;
        })}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const data = await response.json();

  return {
    props: {
      pokemons: data.results,
    },
  };
};
