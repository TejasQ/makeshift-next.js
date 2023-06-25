import React from "react";
import { Link } from "./Link";

export const Breeds = () => {
  const [breeds, setBreeds] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        setBreeds(Object.keys(data.message));
      });
  }, []);

  return (
    <div>
      <h1>Good Bois 🐶</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>
            <Link to={`/breed?b=${breed}`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
