import React, { useContext } from "react";
import { ListingContext } from "../context/listingContext";

function ListingCard({ listing }) {
  const { description, image, location, id } = listing
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

  const handleFavorite = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'favorite': !listing['favorite']
      })
    })
    .then(res => res.json())
    .then(data => dispatch({ type: 'patch', payload: data}))
    .catch(err => alert(err))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {listing['favorite'] ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
