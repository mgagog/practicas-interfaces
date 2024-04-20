import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Quote } from "../types.ts";

const Quotes: FunctionComponent = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch(
      `https://fernandomur-random-data-72.deno.dev/quotes?page=${page}&query=${query}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      });
  }, [page, query]);
  return (
    <div class="island quotes">
      <input
        placeholder={"Buscar"}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          setPage(1);
        }}
      />
      <div class="info">
        {quotes.length === 0 && <h2 class="error">Sin datos</h2>}
        {quotes.map((q) => {
          return (
            <div class="elem" key={q.id}>
              <p>ID: {q.id}</p>
              <p>Quote: {q.quote}</p>
            </div>
          );
        })}
      </div>
      <div class="buttons">
        {page > 1 && <button onClick={() => setPage(page - 1)}>Anterior
        </button>}
        {page < 10 && (
          <button
            disabled={quotes.length === 0}
            onClick={() => setPage(page + 1)}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Quotes;
