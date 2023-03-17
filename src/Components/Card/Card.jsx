import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

function Card({ character, onClose, addFavorite, removeFavorite, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite(character);
    }
  };

  const { id, name, species, gender, image } = character;

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <button onClick={() => onClose(id)}>X</button>
      <img src={image} alt="imagen de personajes" />
      <h2>{species}</h2>
      <h2>{gender}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
