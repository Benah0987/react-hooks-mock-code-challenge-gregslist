import React, {useState} from "react";

//to see if its fav or not we add a state
//passing the props from the ListingContainer
function ListingCard(props) {
//create a state variable isFavorite and a function setIsFavorite to update it
  const [isFavorite, setisFavorite] = useState(false)

  const handleFav = () =>{
      setisFavorite(!isFavorite)
      
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(() => {
       window.location.reload();
    });
  };
  return ( 
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={props.image} alt={props.description} />
      </div>
      <div className="details">
       <button 
             className={`emoji-button favorite ${isFavorite ? "active" : ""}`}
             onClick={handleFav}
           >
            {isFavorite ? "★" : "☆"}
        </button>    
        <strong>{props.description}</strong>
        <span> · {props.location}</span>
        <button className="emoji-button delete" onClick = {handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
