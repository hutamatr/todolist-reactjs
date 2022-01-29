import React from 'react';

const Card = (props) => {
  return (
    <section className="bg-slate-100 rounded-lg shadow-material mx-6 my-2 p-4">
      {props.children}
    </section>
  );
};

export default Card;
