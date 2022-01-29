import React from 'react';

const Form = () => {
  return (
    <section>
      <form action="" className="grid gap-y-4">
        <input
          type="text"
          placeholder="Todo..."
          className="rounded-lg h-8 p-2"
        />
        <input type="date" className="rounded-lg h-8 p-2" />
        <button className="py-3 bg-blue-500 rounded-lg shadow-md md:w-1/3 md:m-auto">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
