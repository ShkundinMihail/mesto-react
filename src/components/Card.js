import React from 'react';

export function Card({ id, ...props }) {
  const handleClickDelete = () => {
    props.deleteCard()
  }
  const handleClickCard = () => {
    props.onClickCard(props.data);
  }
  return (
      <article className="element" lang="en ru" id={props.id}>
        <img className="element__photo" id="photo"
          src={props.data.src} onClick={handleClickCard}
          alt={props.data.alt} />
        <button className="element__delete-button" type="button"
          id="deletePhoto" onClick={handleClickDelete}></button>
        <div className="element__text-zone">
          <h2 className="element__title">{props.data.title}</h2>
        </div>
        <button className="element__like" type="button" name="like"></button>
        <span className="element__number-likes">{props.data.likes.length}</span>
      </article>
  );
}
