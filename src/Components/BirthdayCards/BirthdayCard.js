import React from "react";
import './BirthdayCard.css'

const BirthdayCard = ({ name, id, birthdays }) => {
  const bdays = birthdays.filter(birthday => birthday.month === id)
  return (
    <article className='birthday-card'>
      <h2>{name}</h2>
      {bdays.map(bday => {
        return (
          <p key={bday.id}>{`${bday.name}: ${bday.month}/${bday.day}`}</p>
        )
      })}
    </article>
  )
}

export default BirthdayCard;