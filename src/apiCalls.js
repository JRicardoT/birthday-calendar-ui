const getAllBdays = () => {
  return fetch('http://localhost:3001/api/v1/birthdays')
  .then(response => response.json())
}

export { getAllBdays }