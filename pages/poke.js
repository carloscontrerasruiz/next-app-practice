import Link from "next/link";
import { useEffect, useState } from "react";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <li data-testid={id}>
      <Link href={`/pokemons/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Poke() {
  const [loading, setloading] = useState(true);
  const [pokemons, setpokemons] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const data = await response.json();
    setpokemons(data.results);
    setloading(false);
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

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
