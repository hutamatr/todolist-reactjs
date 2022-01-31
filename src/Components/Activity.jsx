import React, { useState } from 'react';
import { MdDeleteOutline, MdEditNote } from 'react-icons/md';

const Activity = ({ newTodo, newSetTodo }) => {
  const [edit, setEdit] = useState({});

  const TodoDeleteHandler = (todoId) => {
    const todoFilter = newTodo.filter((td) => {
      return td.id !== todoId;
    });

    // eslint-disable-next-line no-restricted-globals
    confirm('apakah ingin delete activity?')
      ? newSetTodo(todoFilter)
      : newSetTodo(newTodo);

    // if (edit.id) {
    //   cancelEditHandler();
    // }
  };

  return (
    <section className="mx-6 my-2">
      <ul className="grid gap-y-3 md:grid-cols-3 gap-x-3 ">
        {newTodo.map((todo) => {
          return (
            <li
              className="rounded-lg p-3 flex justify-between flex-col gap-y-2 shadow-material border-solid border-slate-500 "
              key={todo.id}
            >
              <h3 className="text-lg">{todo.activity}</h3>
              <p className="text-xs font-bold">{todo.date}</p>
              <div className="flex justify-around">
                <MdEditNote
                  className="text-3xl cursor-pointer text-[#777777] hover:text-blue-500 hover:-translate-y-[.15rem] hover:duration-500"
                  // onClick={TodoEditHandler.bind(this, todo)}
                />
                <MdDeleteOutline
                  className="text-3xl cursor-pointer text-[#777777] hover:text-blue-500 hover:-translate-y-[.15rem] hover:duration-500"
                  onClick={TodoDeleteHandler.bind(this, todo.id)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Activity;
