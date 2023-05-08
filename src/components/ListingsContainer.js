import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <main>
      <ul className="cards">
        {listings.map(({ id, description, image, location }) => (
          <ListingCard
            key={id}
            id={id}
            description={description}
            image={image}
            location={location}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
