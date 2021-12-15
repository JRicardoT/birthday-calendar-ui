import React from "react";
import BirthdayCard from "../BirthdayCards/BirthdayCard";
import './Birthdays.css';

const Birthdays = ({ months, birthdays }) => {
  const BirthdayCards = months.map(month => {
    return (
      <BirthdayCard 
        name={month.name}
        id={month.id}
        key={month.id}
        birthdays={birthdays}
      />
    )
  })
  return (
    <section className='birthday-cards-container'>
      {BirthdayCards}
    </section>
  )
}

export default Birthdays;