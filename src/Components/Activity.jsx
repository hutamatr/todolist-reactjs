import React from 'react';
import Card from './Card';

const Activity = () => {
  return (
    <Card>
      <ul className="flex gap-y-3 flex-col">
        <li className="bg-slate-500 rounded-lg p-3 flex justify-between flex-col gap-y-2 shadow-md">
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos
            doloribus dolorem ullam consequuntur iure.
          </h3>
          <h5>01/10/22</h5>
          <button className="bg-blue-500 rounded-lg py-2 shadow-md">
            Edit
          </button>
          <button className="bg-blue-500 rounded-lg py-2 shadow-md">
            Delete
          </button>
        </li>
        <li className="bg-slate-500 rounded-lg p-3 flex justify-between">
          <h3>Activity 1</h3>
          <h5>01/10/22</h5>
        </li>
        <li className="bg-slate-500 rounded-lg p-3 flex justify-between">
          <h3>Activity 1</h3>
          <h5>01/10/22</h5>
        </li>
      </ul>
    </Card>
  );
};

export default Activity;
