import React, { Component } from 'react';


const Card = ({id, name, email}) => {
  return (
    <section className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://www.robohash.org/${id}?200x200`} alt="This is an image" />
      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </section>
  )
}

export default Card;