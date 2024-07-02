import React from 'react'

const SingleList = ({ people }) => {
  return (
    <div>
      <h1>{people.name} : {people.profession}</h1>
    </div>
  )
}

export default SingleList