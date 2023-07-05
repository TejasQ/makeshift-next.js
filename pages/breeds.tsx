import React from "react";
import { Link } from "../Link";

export const getStuff = async () => {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      return Object.keys(data.message);
    });
};

const Breeds = ({ initialBreeds }) => {
  const [breeds, setBreeds] = React.useState<string[]>(initialBreeds);

  React.useEffect(() => {
    getStuff().then(setBreeds);
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

export default Breeds;

export const gSSP = async () => {
  const data = await getStuff();
  return {
    initialBreeds: data,
  };
};
