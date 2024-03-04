import { FunctionComponent } from "preact";

type MenuProps = {
  page?: string;
};
const Menu: FunctionComponent<MenuProps> = ({ page }) => {
  return (
    <div class="menu">
      <a href="/airport" class={page === "airport" ? "selected" : ""}>
        Airports
      </a>
      &emsp;
      <a href="/jokes" class={page === "jokes" ? "selected" : ""}>
        Jokes
      </a>
      &emsp;
      <a href="/recipe" class={page === "recipe" ? "selected" : ""}>
        Recipes
      </a>
    </div>
  );
};

export default Menu;