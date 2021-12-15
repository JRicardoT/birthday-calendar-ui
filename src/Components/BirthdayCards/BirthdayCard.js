import React from "react";
import './BirthdayCard.css'

const BirthdayCard = ({ name, id }) => {
  return (
    <article className='birthday-card'>
      <h2>{name}</h2>
    </article>
  )
}

export default BirthdayCard;