import React, { useEffect } from "react";
import { Link } from "../Link";

const getBreed = async (breed: string) => {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.json())
    .then((data) => data.message);
};

const Breed = ({ initialImage, initialBreed }) => {
  const [breed, setBreed] = React.useState<string>(initialBreed);
  const [image, setImage] = React.useState<string>(initialImage);

  useEffect(() => {
    // Get breed from query string and fetch image
    const params = new URLSearchParams(window.location.search);
    const breed = params.get("b");

    if (breed) {
      setBreed(breed);
      getBreed(breed).then((im) => {
        setImage(im);
      });
    }
  }, []);

  return (
    <div>
      <Link to="/breeds">Go Back</Link>
      <h1>{breed}</h1>
      <img src={image} alt={breed} />
    </div>
  );
};

export default Breed;

export const gSSP = async ({ query }) => {
  const image = await getBreed(query.breed);
  return {
    initialBreed: query.b,
    initialImage: image,
  };
};
