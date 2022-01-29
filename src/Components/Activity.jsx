import React from 'react';
import Card from './Card';
import { MdDeleteOutline, MdEditNote } from 'react-icons/md';

const Activity = () => {
  return (
    <section className="mx-6 my-2">
      <ul className="grid gap-y-3 md:grid-cols-3 gap-x-3 ">
        <li className="rounded-lg p-3 flex justify-between flex-col gap-y-2 shadow-material border-solid border-slate-500 ">
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos
            doloribus dolorem ullam consequuntur iure.
          </h3>
          <h5>01/10/22</h5>
          <div className="flex justify-around">
            <MdEditNote className="text-3xl cursor-pointer text-[#777777] hover:text-blue-500" />
            <MdDeleteOutline className="text-3xl cursor-pointer text-[#777777] hover:text-blue-500" />
          </div>
        </li>
        <li className="rounded-lg p-3 flex justify-between flex-col gap-y-2 shadow-material border-solid border-slate-500 ">
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos
            doloribus dolorem ullam consequuntur iure.
          </h3>
          <h5>01/10/22</h5>
          <div className="flex justify-around">
            <MdEditNote className="text-3xl cursor-pointer text-[#777777] hover:text-blue-500" />
            <MdDeleteOutline className="text-3xl cursor-pointer text-[#777777] hover:text-blue-500" />
          </div>
        </li>
        <li className="rounded-lg p-3 flex justify-between flex-col gap-y-2 shadow-material border-solid border-slate-500 ">
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos
            doloribus dolorem ullam consequuntur iure.
          </h3>
          <h5>01/10/22</h5>
          <div className="flex justify-around">
            <MdEditNote className="text-3xl cursor-pointer text-[#777777] hover:text-blue-500" />
            <MdDeleteOutline className="text-3xl cursor-pointer text-[#777777] hover:text-blue-500" />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Activity;
