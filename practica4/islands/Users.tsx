import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { User } from "../types.ts";

const Users: FunctionComponent = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(
      `https://fernandomur-random-data-72.deno.dev/users?page=${page}&query=${query}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [page, query]);

  return (
    <div class="island users">
      <input
        placeholder={"Buscar"}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          setPage(1);
        }}
      />
      <div class="info">
        {users.length === 0 && <h2 class="error">Sin datos</h2>}
        {users.map((u) => {
          return (
            <div class="elem" key={u.username}>
              <p>ID: {u.id}</p>
              <p>Name: {u.name}</p>
              <p>Username: {u.username}</p>
              <p>Created at: {u.created_at}</p>
            </div>
          );
        })}
      </div>
      <div class="buttons">
        {page > 1 && <button onClick={() => setPage(page - 1)}>Anterior
        </button>}
        {page < 10 && (
          <button
            disabled={users.length === 0}
            onClick={() => setPage(page + 1)}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
