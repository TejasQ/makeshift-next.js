import React, { useEffect } from "react";
import { Link } from "./Link";

export const Breed = () => {
  const [breed, setBreed] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    // Get breed from query string and fetch image
    const params = new URLSearchParams(window.location.search);
    const breed = params.get("b");

    if (breed) {
      setLoading(true);
      setBreed(breed);
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => response.json())
        .then((data) => {
          setImage(data.message);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>{breed}</h1>
      <img width="400" src={image} alt={breed} />
    </div>
  );
};
