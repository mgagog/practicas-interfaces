import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Pokemon } from "../types.ts";

const Pokemons: FunctionComponent = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(
      `https://fernandomur-random-data-72.deno.dev/pokemon?page=${page}&query=${query}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [page, query]);

  return (
    <div class="island pokemon">
      <input
        placeholder={"Buscar"}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          setPage(1);
        }}
      />
      <div class="info pokemon">
        {pokemon.length === 0 && <h2 class="error">Sin datos</h2>}
        {pokemon.map((p) => {
          return (
            <div class="elem">
              <p>ID: {p.id}</p>
              <p>Name: {p.name}</p>
              <p>
                Type: <b class={"type " + p.type}>{p.type}</b>
              </p>
              <p>Base experience: {p.base_experience}</p>
            </div>
          );
        })}
      </div>
      <div class="buttons">
        {page > 1 && <button onClick={() => setPage(page - 1)}>Anterior
        </button>}
        {page < 13 && (
          <button
            disabled={pokemon.length === 0}
            onClick={() => setPage(page + 1)}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Pokemons;
