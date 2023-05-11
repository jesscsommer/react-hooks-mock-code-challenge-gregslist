import React, { useContext } from "react";
import { ListingContext } from "../context/listingContext";

function ListingCard({ description, image, location, id }) {
  const { dispatch } = useContext(ListingContext)

  const handleDelete = () => {
    dispatch({ type: 'remove', payload: id})
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.status !== 200) {
        dispatch({ type: 'add', payload: { description, image, location, id }})
      }
    })

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
