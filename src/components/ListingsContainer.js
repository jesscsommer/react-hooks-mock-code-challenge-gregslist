import React, { useContext } from "react";
import ListingCard from "./ListingCard";
import { ListingContext } from "../context/listingContext"

function ListingsContainer() {
  const { listings } = useContext(ListingContext)
  console.log(listings)

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard key={listing.id} {...listing} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
