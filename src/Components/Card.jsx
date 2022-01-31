import React from 'react';

const Card = (props) => {
  return (
    <section className="bg-blue-100 rounded-md p-4 mx-4 shadow-material">
      {props.children}
    </section>
  );
};

export default Card;
